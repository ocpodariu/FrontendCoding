hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function ($scope, $http, $routeParams, $location, commonResourcesFactory) {
        $http.get(commonResourcesFactory.findOneJobUrl + $routeParams.jobid)
            .success(function(data) {
                $scope.job = data;
            });

        $scope.back = function() {
            $location.url('/jobslist');
        }
}]);