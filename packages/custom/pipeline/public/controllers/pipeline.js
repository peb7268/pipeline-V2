'use strict';

angular.module('mean.pipeline').controller('PipelineController', ['$scope', 'Global', 'Pipeline', function($scope, Global, Pipeline) {
      $scope.global = Global;
      $scope.package = {
        name: 'pipeline'
      };
      $scope.Pipeline = Pipeline;

      //Private Methods
      function init(){
            console.log('PipelineController:init');
            
      }

      init();
}]);
