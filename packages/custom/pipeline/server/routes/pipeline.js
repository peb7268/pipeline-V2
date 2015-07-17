'use strict';

// The Package is passed automatically as first parameter
module.exports = function(Pipeline, app, auth, database) {
  function bindSocketEvents(socket){
    console.log('Binding events to the socket.');
    console.log("\n\n");

    socket.on('item.add', function(data){
      console.log('item.add response', data);
      socket.emit('item.add.response', data);
    });
  }

  app.io.on('connection', function(socket){
    console.log("\n\n");
    console.log('socket connected');
    
    bindSocketEvents(socket);
  });

  app.route('/pipeline').get(function(req, res, next){
    res.send('connected');
  });

  app.get('/pipeline/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/pipeline/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/pipeline/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/pipeline/example/render', function(req, res, next) {
    Page.render('index', {
      package: 'pipeline'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
