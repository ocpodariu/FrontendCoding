hrApp.controller('DepartmentViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function ($scope, $http, $routeParams, $location, commonResourcesFactory) {
        $http({
            url: commonResourcesFactory.findOneDepartmentUrl + $routeParams.departmentid,
            method: 'GET'
        }).
            success(function (data) {
                $scope.department = data;
            });

        $scope.back = function () {
            $location.url('/departmentslist');
        }
    }]);