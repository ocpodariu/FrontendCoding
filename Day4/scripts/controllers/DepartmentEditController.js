hrApp.controller('DepartmentEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, $commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $scope.department = {};

        $scope.locations = [];

        $http.get($commonResourcesFactory.findOneDepartmentUrl + $routeParams.departmentid)
            .success(function (data, status, header, config) {
                $scope.department = data;
            });

        $http.get($commonResourcesFactory.findAllLocationsUrl)
            .success(function (data, status, header, config) {
                $scope.locations = data;
            });

        $scope.reset = function () {
            $scope.department = {};
        };

        $scope.create = function (addDepartment) {
            $http({
                url: $commonResourcesFactory.editDepartmentUrl,
                method: 'PUT',
                data: addDepartment
            }).
                success(function (data) {
                    $scope.department = data;
                    $location.url('/departmentview/' + $scope.department.departmentId);
                });
        }
    }]);