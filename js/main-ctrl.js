angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $document, $timeout, mainServ) {

  var i;
    
  function go() {
    $scope.model.items = mainServ.getItems($scope.model.number, $scope.model.map, $scope.model.fillers);
  }

  $scope.model = {
    number: 123,
    map: 'rltcdspgmn',
    fillers: 'aeiouyh',
    stats: []
  };
  $scope.go = go;

});
