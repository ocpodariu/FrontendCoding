/**
 * Created by Ovidiu on 5/12/2015.
 */

hrApp.controller('MainController', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {
    $scope.name = 'Type your name...';

    // dupa 10 secunde este apelata functia specificata
    $timeout(function() {
        console.log('Scope: ' + $scope.name);
        console.log('Root Scope: ' + $rootScope.name);
    }, 10000);
}]);