hrApp.controller('LocationViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function ($scope, $http, $routeParams, $location, commonResourcesFactory) {
        $http({
            url: commonResourcesFactory.findOneLocationUrl + $routeParams.locationid,
            method: 'GET'
        }).
            success(function (data) {
                $scope.location = data;
            });

        $scope.back = function () {
            $location.url('/locationslist');
        }
    }]);