hrApp.controller('LocationEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, $commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $scope.location = {};

        $http.get($commonResourcesFactory.findOneLocationUrl + $routeParams.locationid)
            .success(function (data, status, header, config) {
                $scope.location = data;
            });

        $scope.reset = function () {
            $scope.location = {};
        };

        $scope.create = function (addLocation) {
            $http({
                url: $commonResourcesFactory.editLocationUrl,
                method: 'PUT',
                data: addLocation
            }).
                success(function (data) {
                    $scope.location = data;
                    $location.url('/locationview/' + $scope.location.locationId);
                });
        }
    }]);