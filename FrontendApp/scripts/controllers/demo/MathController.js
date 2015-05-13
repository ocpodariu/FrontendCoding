hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){
    $scope.numberA = 0;
    $scope.numberB = 0;

    $scope.calculate = function() {
        $scope.additionResult = MathService.add($scope.numberA, $scope.numberB);
        $scope.substractionResult = MathService.substract($scope.numberA, $scope.numberB);
        $scope.multiplicationResult = MathService.multiply($scope.numberA, $scope.numberB);
        $scope.divisionResult = MathService.divide($scope.numberA, $scope.numberB);
    };

}]);
