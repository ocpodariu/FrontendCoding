hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, $commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.employee = {};
        $scope.departments = [];
        $scope.jobs = [];
        $scope.managers = [];

        $http.get($commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeid)
            .success(function (data, status, header, config) {
                $scope.employee = data;
            });

        $http.get($commonResourcesFactory.findAllDepartmentsUrl)
            .success(function (data, status, header, config) {
                $scope.departments = data;
            });

        $http.get($commonResourcesFactory.findAllJobsUrl)
            .success(function (data, status, header, config) {
                $scope.jobs = data;
            });

        $http.get($commonResourcesFactory.findAllEmployeesUrl)
            .success(function (data, status, header, config) {
                $scope.managers = data;
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({
                url: $commonResourcesFactory.editEmployeeUrl,
                method: 'PUT',
                data: addEmployee
            }).
                success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeview/' + $scope.employee.employeeId);
                });
        }

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;

    }]);