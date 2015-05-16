hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $scope.job = {};

        $scope.reset = function () {
            this.job = {};
        };

        $scope.create = function (addJob) {
            $http({
                url: $commonResourcesFactory.addJobUrl,
                method: 'POST',
                data: addJob
            }).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/' + $scope.job.jobId);
                });
        }
    }]);