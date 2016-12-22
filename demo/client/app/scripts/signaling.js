angular.module('phonertcdemo')
  .factory('signaling', function (socketFactory) {
    var socket = io.connect('https://irest.pitt.edu:8080/', {secure: true});
    
    var socketFactory = socketFactory({
      ioSocket: socket
    });

    return socketFactory;
  });
