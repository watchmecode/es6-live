// Marionette.Gauntlet v0.0.1
// --------------------------
//
// Build wizard-style workflows with an event-emitting state machine
// Requires Backbone.Marionette (http://marionettejs.com)
// Requires Backbone.Select (http://github.com/hashchange/backbone.select)
//
// Copyright (C) 2015 Muted Solutions, LLC.
// Distributed under MIT license

Marionette.Gauntlet = (function(Backbone, Marionette, $, _){
  // Wizard Steps
  // ------------
  
  // A selectable model that represents an individual step
  // in the wizard / workflow 
  var WizardStep = Backbone.Model.extend({
    initialize: function(){
      Backbone.Select.Me.applyTo(this);
    },

    toJSON: function(){
      var data = Backbone.Model.prototype.toJSON.call(this);
      data.selected = this.selected;
      return data;
    }
  });

  // A collection of wizard steps, defining the over-all workflow
  // of the wizard.
  var WizardStepCollection = Backbone.Collection.extend({
    model: WizardStep,

    initialize: function(models, options){
      this.emptyStep = new this.model({isEmpty: true});
      this.finalStep = new this.model({isFinal: true, name: "Done"});
      Backbone.Select.One.applyTo(this, models, options);
    },

    // Get the next step in the workflow
    getNext: function(){
      var index, nextIndex, nextStep;

      if (!this.selected){
        index = 0;
      } else {
        index = this.indexOf(this.selected);
      }

      if (index < this.length-1){
        nextIndex = index + 1;
        nextStep = this.at(nextIndex) || this.emptyStep;
      } else {
        nextStep = this.finalStep;
      }

      return nextStep;
    },

    // Get the previous step in the workflow
    getPrevious: function(){
      var index, nextIndex;

      if (!this.selected){
        index = 0;
      } else {
        index = this.indexOf(this.selected);
      }

      if (index > 0){
        nextIndex = index - 1;
      } else {
        nextIndex = -1;
      }

      return this.at(nextIndex) || this.emptyStep;
    }
  });

  // Guantlet Controller
  // -------------------

  var Gauntlet = Marionette.Controller.extend({
    constructor: function(options){
      Marionette.Controller.prototype.constructor.apply(this, arguments);

      if (!options || !options.workflowSteps){
        var error = new Error("Wizard needs `workflowSteps` badly.")
        error.name = "NoWorkflowStepsError";
        throw error;
      }

      this.steps = new WizardStepCollection(options.workflowSteps);
      this.filters = {};
      this.onSteps = {};
    },

    // Get the list of steps that run this workflow
    getSteps: function(){
      return this.steps;
    },

    // Update the list of steps that run this workflow
    updateSteps: function(workflowSteps) {
      var _currentStep = this._currentStep;
      var currentStepId = _currentStep ? _currentStep.id : null;
      var currentStep = null;

      this.steps.reset(workflowSteps);

      if (currentStepId && (currentStep = this.steps.get(currentStepId))) {
        this._setCurrentStep(currentStep);
      }
    },

    firstStep: function(){
      var step = this.steps.at(0);
      this.moveTo(step);
    },

    // Move to the next step in the workflow
    nextStep: function(){
      var nextStep = this.steps.getNext();
      this.moveTo(nextStep);
    },

    // Move to the previous step in the workflow
    previousStep: function(){
      var previousStep = this.steps.getPrevious();
      this.moveTo(previousStep);
    },

    // Complete the workflow and move on
    complete: function(){
      var onComplete = this.filters.onComplete;

      if (_.isObject(onComplete)){
        onComplete.fn.call(onComplete.context);
      } 

      this.trigger("complete");
      this._clearCurrentStep();
    },
    
    // Add a step handler by key, providing a handler
    // callback function and an optional context object
    // for executing the handler callback
    onStep: function(stepKey, handler, context){
      var stepList = this.onSteps[stepKey];

      if (!stepList){
        stepList = [];
        this.onSteps[stepKey] = stepList;
      }

      stepList.push({
        handler: handler,
        context: context
      });
    },

    // Run a callback before moving to another step
    beforeMove: function(fn, context){
      this.filters.beforeMove = {fn: fn, context: context};
    },

    // Run a callback after the workflow has been completed
    onComplete: function(fn, context){
      this.filters.onComplete = {fn: fn, context: context};
    },

    // Move to a given step by the step's "key"
    setStepByKey: function(stepKey){
      stepKey = stepKey || "";
      var step = this.steps.where({key: stepKey})[0];
      if (step){ 
        this.moveTo(step);
      }
    },

    // Move to a specified step
    moveTo: function(step){

      // build a function to call when we're ready to move
      var done = _.bind(function(){

        // set the current step, then run all the step callbacks
        this._setCurrentStep(step, function(){
          var key = step.get("key");
          this._runStepCallbacks(key);
        });

      }, this);

      // only run the beforeMove filter if this is not the first
      // step to be shown in this instance of the gauntlet
      var isFirstUse = (!this._currentStep);
      var beforeMove = this.filters.beforeMove;
      
      if (!isFirstUse && _.isObject(beforeMove)){
        beforeMove.fn.call(beforeMove.context, done);
      } else {
        done();
      }
    },

    // Set the current step and optionally run a callback
    // function after the current step has been set.
    _setCurrentStep: function(step, cb){
      var key = step.get("key");

      this.trigger("step", key);
      this.trigger("step:" + key);

      if (this._currentStep !== step){
        this._currentStep = step;
        step.select();
        if (cb){ cb.apply(this); }
      }
    },

    // Clear the current step
    _clearCurrentStep: function(){
      if (this._currentStep){
        delete this._currentStep;
      }
    },

    _runStepCallbacks: function(stepKey){
      var stepList = this.onSteps[stepKey];
      if (!stepList){ return; }

      var length = stepList.length;
      for (var i=0; i<length; i++){
        var config = stepList[i];

        if (!_.isFunction(config.handler)){
          var error = new Error("Cannot run step for '" + stepKey + "'. Handler not found.");
          error.name = "StepHandlerNotFound";
          throw error;
        }

        config.handler.apply(config.context);
      }
    },

  });

  // Export Public API
  // -----------------
  return Gauntlet;

})(Backbone, Marionette, $, _);
