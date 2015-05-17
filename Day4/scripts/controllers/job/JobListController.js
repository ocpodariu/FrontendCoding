hrApp.controller('JobListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {
        $scope.jobs = [];
        $scope.jobToBeDeleted = undefined;

        // Load job list from server
        $http.get(commonResourcesFactory.findAllJobsUrl)
            .success(function (data, status, header, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobview/' + jobId);
        };

        $scope.editJob = function (jobId) {
            $location.url('/jobedit/' + jobId);
        };

        /*$scope.deleteJob = function (jobId) {
            $http({
                url: commonResourcesFactory.deleteJobUrl + jobId,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Job ' + jobId + ' has been successfuly deleted!');
                });
        };*/

        $scope.deleteJob = function () {
            $http({
                url: commonResourcesFactory.deleteJobUrl + $scope.jobToBeDeleted,
                method: 'DELETE'
            })
                .success(function (data, status, header, config) {
                    console.log('Job ' + $scope.jobToBeDeleted + ' has been successfuly deleted!');

                    $scope.resetJobToBeDeleted();
                });
        };


        $scope.setJobToBeDeleted = function (jobId) {
            $scope.jobToBeDeleted = jobId;
        }

        $scope.resetJobToBeDeleted = function () {
            $scope.jobToBeDeleted = undefined;
        }
    }
]);