'use strict';

angular.module('mean.pipeline').config(['$meanStateProvider',
  function($meanStateProvider) {
    $meanStateProvider.state('pipeline example page', {
      url: '/',
      templateUrl: 'pipeline/views/index.html'
    });
  }
]);
