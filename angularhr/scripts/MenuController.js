/**
 * Created by Ovidiu on 5/12/2015.
 */

hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: 'OtherScope',
            url: 'views/childscope.html'
        }
    ];
}]);