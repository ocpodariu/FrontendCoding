hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.departments = [];
        $scope.jobs = [];
        $scope.managers = [];

        $http.get($commonResourcesFactory.findAllDepartmentsUrl)
            .success(function(data, status, header, config) {
                $scope.departments = data;
            });

        $http.get($commonResourcesFactory.findAllJobsUrl)
            .success(function(data, status, header, config) {
                $scope.jobs = data;
            });

        $http.get($commonResourcesFactory.findAllEmployeesUrl)
            .success(function(data, status, header, config) {
                $scope.managers = data;
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };


        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({
                url: $commonResourcesFactory.addEmployeeUrl,
                method: 'POST',
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