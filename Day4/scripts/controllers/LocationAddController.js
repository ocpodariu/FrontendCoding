hrApp.controller('LocationAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
        $scope.location = {};
        $scope.requiredErrorMessage = "Please fill out this form!";

        $scope.reset = function () {
            this.department = {};
        };

        $scope.create = function (addLocation) {
            $http({
                url: $commonResourcesFactory.addLocationUrl,
                method: 'POST',
                data: addLocation
            }).
                success(function (data) {
                    $scope.location = data;
                    $location.url('/locationview/' + $scope.location.locationId);
                });
        }
    }]);