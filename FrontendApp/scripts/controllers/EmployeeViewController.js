hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {
        $scope.employee = {};

        // Get employee details using the id
        $http.get(commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeid)
            .success(function(data, status, header, config) {
                $scope.employee = data;
            });

        $scope.back = function() {
            // Go back to the Employee List page
            $location.url('/employeeslist');
        }
    }]);