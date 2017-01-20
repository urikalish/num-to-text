angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $document, $timeout, mainServ) {

  var i;
    
  function go(item) {
    var index = item.number.index;
    $scope.model.numbers[index].results = mainServ.getItems($scope.model.numbers[index].number, $scope.model.map, $scope.model.fillers);
  }

  $scope.model = {
    map: [
      {
        digit: '0',
        options: 'z|s'
      },
      {
        digit: '1',
        options: 'd|t|th'
      },
      {
        digit: '2',
        options: 'n'
      },
      {
        digit: '3',
        options: 'm'
      },
      {
        digit: '4',
        options: 'r'
      },
      {
        digit: '5',
        options: 'l'
      },
      {
        digit: '6',
        options: 'j|sh|ch'
      },
      {
        digit: '7',
        options: 'k|q|c|g'
      },
      {
        digit: '8',
        options: 'f|ph|v'
      },
      {
        digit: '9',
        options: 'b|p'
      },
    ],
    fillers: 'aeiouwxy',
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
