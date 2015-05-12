/**
 * Created by Ovidiu on 5/12/2015.
 */

hrApp.controller('MathController', ['$scope', function($scope) {
    $scope.numberA = 0;
    $scope.numberB = 0;

    $scope.additionResult = 0;
    $scope.substractionResult = 0;
    $scope.multiplicationResult = 0;
    $scope.divisionResult = 0;

    $scope.calculate = function() {
        $scope.additionResult = $scope.numberA + $scope.numberB;
        $scope.substractionResult = $scope.numberA - $scope.numberB;
        $scope.multiplicationResult = $scope.numberA * $scope.numberB;

        if ($scope.numberB == 0)
            $scope.divisionResult = 0;
        else
            $scope.divisionResult = $scope.numberA / $scope.numberB;
    };
}]);