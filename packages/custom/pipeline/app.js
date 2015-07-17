'use strict';

//Defining the Package
var Module 	= require('meanio').Module;
var Pipeline 	= new Module('pipeline');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Pipeline.register(function(app, auth, database) {
  Pipeline.routes(app, auth, database);

  Pipeline.aggregateAsset('css', 'loginForms.css');
  Pipeline.aggregateAsset('css', 'pipeline.css');
  Pipeline.angularDependencies(['mean.system']);

  return Pipeline;
});
