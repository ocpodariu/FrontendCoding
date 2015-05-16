hrApp.controller('DepartmentListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
        $scope.departments = [];
        $scope.departmentToBeDeleted = undefined;

        // Load department list from server
        $http({
            url: commonResourcesFactory.findAllDepartmentsUrl,
            method: 'GET'
        }).
            success(function (data, status, headers, config) {
                $scope.departments = data;
            });

        $scope.viewDepartment = function (departmentId) {
            $location.url('/departmentview/' + departmentId);
        };

        $scope.editDepartment = function (departmentId) {
            $location.url('/departmentedit/' + departmentId);
        };

        /*$scope.deleteDepartment = function (departmentId) {
            $http({
                url: commonResourcesFactory.deleteDepartmentUrl + departmentId,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Department ' + departmentId + ' has been successfuly deleted!');
                });
        };*/

        $scope.deleteDepartment = function () {
            $http({
                url: commonResourcesFactory.deleteDepartmentUrl + $scope.departmentToBeDeleted,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Department ' + $scope.departmentToBeDeleted + ' has been successfuly deleted!');

                    $scope.resetDepartmentToBeDeleted();
                });
        };


        $scope.setDepartmentToBeDeleted = function (departmentId) {
            $scope.departmentToBeDeleted = departmentId;
        }

        $scope.resetDepartmentToBeDeleted = function () {
            $scope.departmentToBeDeleted = undefined;
        }
    }]);