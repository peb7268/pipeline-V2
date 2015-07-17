'use strict';

angular.module('mean.pipeline').factory('Pipeline', [function() {
	
	function init(){
		window.io = io();
		console.log('PipelineService:init');
		openSocketConnection();
		bindSocketEvents();
	}

    function addItem($event){
		$event.preventDefault();
		io.emit('item.add', {item: 'test item & desc'});
    }

    function openSocketConnection(){
	    io.on('connect', function(){
          	console.log('client connected');
	    });
	}

	function bindSocketEvents(){
		io.on('item.add.response', function(data){
          	console.log('client item.add.response: ', data.item);
	    });
	}

    init();

    return {
      name: 'pipeline',
      addItem: addItem
    };
}]);
