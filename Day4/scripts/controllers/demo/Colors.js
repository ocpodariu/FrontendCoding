hrApp.controller('Colors', ['$scope', function ($scope) {
    $scope.colors = [
        {
            text: 'muted',
            class: 'text-muted'
        },
        {
            text: 'primary',
            class: 'text-primary'
        },
        {
            text: 'success',
            class: 'text-success'
        },
        {
            text: 'info',
            class: 'text-info'
        },
        {
            text: 'warning',
            class: 'text-warning'
        },
        {
            text: 'danger',
            class: 'text-danger'
        }
    ];

    $scope.selectedColor = $scope.colors[0];

    $scope.changeColor = function(){
        $scope.selectedClass = $scope.selectedColor.class;
    }

    $scope.searchText;
    $scope.orderByText;
}]);