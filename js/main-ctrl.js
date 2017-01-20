angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $document, $timeout, mainServ) {

  var i;
    
  function go(item) {
    var index = item.number.index;
    $scope.model.numbers[index].results = mainServ.getItems($scope.model.numbers[index].number, $scope.model.map, $scope.model.fillers);
  }

  $scope.model = {
    map: 'rltcdspgmn',
    fillers: 'aeiouyh',
    numbers: []    
  };

  for (i = 0; i < 6; i++) {
    $scope.model.numbers.push({
      index: i,
      number: '',
      results: []
    });  
  }

  $scope.go = go;

});
