angular.module('phonertcdemo')

  .controller('ContactsCtrl', function ($scope, $state, signaling, ContactsService) {
    $scope.contacts = ContactsService.onlineUsers;

    $scope.logout = function () {
      signaling.disconnect();
      $state.go('app.login');
      window.location.reload();
    };

  });
