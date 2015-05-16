hrApp.controller('MenuController', ['$scope', 'employeeActionsService', 'jobActionsService', 'departmentActionsService',
    function ($scope, employeeActionsService, jobActionsService, departmentActionsService) {
        $scope.employeeActionList = employeeActionsService;
        $scope.jobActionList = jobActionsService;
        $scope.departmentActionList = departmentActionsService;

        $scope.currentDate = new Date();
    }]);
