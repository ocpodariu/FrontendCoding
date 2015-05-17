hrApp.controller('LocationListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
        $scope.locations = [];
        $scope.locationToBeDeleted = undefined;

        // Load department list from server
        $http({
            url: commonResourcesFactory.findAllLocationsUrl,
            method: 'GET'
        }).
            success(function (data, status, headers, config) {
                $scope.locations = data;
            });

        $scope.viewLocation = function (locationId) {
            $location.url('/locationview/' + locationId);
        };

        $scope.editLocation = function (locationId) {
            $location.url('/locationview/' + locationId);
        };

        /*$scope.deleteLocation = function (locationId) {
            $http({
                url: commonResourcesFactory.deleteLocationUrl + locationId,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Location ' + locationId + ' has been successfuly deleted!');
                });
        };*/

        $scope.deleteLocation = function () {
            $http({
                url: commonResourcesFactory.deleteLocationUrl + $scope.locationToBeDeleted,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Location ' + $scope.locationToBeDeleted + ' has been successfuly deleted!');

                    $scope.resetLocationToBeDeleted();
                });
        };


        $scope.setLocationToBeDeleted = function (locationId) {
            $scope.locationToBeDeleted = locationId;
        }

        $scope.resetLocationToBeDeleted = function () {
            $scope.locationToBeDeleted = undefined;
        }
    }]);