hrApp.controller('RequestController', ['$scope', '$http', function($scope, $http){
    $scope.jobList = [];

    $http.get('http://demo.teamnet.ro:8282/hrapp/jobs')
        .success(function(data, status, header, config) {
            $scope.jobList = data;
        });

}]);
