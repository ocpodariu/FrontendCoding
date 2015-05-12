/**
 * Created by Ovidiu on 5/12/2015.
 */

hrApp.controller('OtherController', ['$scope', function($scope) {
    $scope.title = undefined;

    $scope.setTitle = function() {
        $scope.title = 'New Title';
    };
}]);