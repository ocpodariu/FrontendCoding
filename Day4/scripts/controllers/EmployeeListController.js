hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
        $scope.employees = [];
        $scope.employeeToBeDeleted = undefined;

        // Load employee list from server
        $http({url: commonResourcesFactory.findAllEmployeesUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.employees = data;
            });

        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };

        $scope.editEmployee = function (employeeId) {
            $location.url('/employeeedit/' + employeeId);
        };

        /*$scope.deleteEmployee = function (employeeId) {
            $http({
                url: commonResourcesFactory.deleteEmployeeUrl + employeeId,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Employee ' + employeeId + ' has been successfuly deleted!');
                });
        };*/

        $scope.deleteEmployee = function () {
            $http({
                url: commonResourcesFactory.deleteEmployeeUrl + $scope.employeeToBeDeleted,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Employee ' + $scope.employeeToBeDeleted + ' has been successfuly deleted!');

                    $scope.resetEmployeeToBeDeleted();
                });
        };


        $scope.setEmployeeToBeDeleted = function (employeeId) {
            $scope.employeeToBeDeleted = employeeId;
        }

        $scope.resetEmployeeToBeDeleted = function () {
            $scope.employeeToBeDeleted = undefined;
        }
    }]);