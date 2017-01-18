angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $document, $timeout, mainServ) {

  var i;
    
  function go() {
    $scope.model.stats = mainServ.getStats();
  }

  $scope.model = {};
  $scope.model.stats = [];
  $scope.go = go;

});
