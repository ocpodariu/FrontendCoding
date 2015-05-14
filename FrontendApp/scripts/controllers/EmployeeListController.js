hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
        // Employees list
        $scope.employees = [];

        // Get list of employees from server
        $http.get(commonResourcesFactory.findAllEmployeesUrl)
            .success(function(data, status, header, config) {
                $scope.employees = data;
            });

        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };
    }]);