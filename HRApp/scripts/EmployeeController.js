/**
 * Created by Ovidiu on 5/12/2015.
 */

hrApp.controller('EmployeeController', ['$scope', function($scope) {
    $scope.employeeActionList = [
        {
            label: 'Show all employees',
            url: '#'
        },
        {
            label: 'Find one employee',
            url: '#'
        },
        {
            label: 'Insert new employee',
            url: '#'
        },
        {
            label: 'Update employee',
            url: '#'
        },
        {
            label: 'Delete employee',
            url: '#'
        }
    ];
}]);