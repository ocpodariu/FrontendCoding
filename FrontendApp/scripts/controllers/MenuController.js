hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = employeeActionsService;

    $scope.currentDate = new Date();
}]);
