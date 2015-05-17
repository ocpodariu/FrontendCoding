hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, $commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $scope.job = {};

        $http.get($commonResourcesFactory.findOneJobUrl + $routeParams.jobid)
            .success(function (data, status, header, config) {
                $scope.job = data;
            });

        $scope.reset = function () {
            $scope.job = {};
        };

        $scope.create = function (addJob) {
            $http({
                url: $commonResourcesFactory.editJobUrl,
                method: 'PUT',
                data: addJob
            }).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/' + $scope.job.jobId);
                });
        }
    }]);