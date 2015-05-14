//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/employeeslist', {
            templateUrl: 'views/employeelist.html',
            controller: 'EmployeeListController'
        })
        .when('/employeeview/:employeeid', {
            templateUrl: 'views/employeeview.html',
            controller: 'EmployeeViewController'
        })
        .when('/math', {
            templateUrl: 'views/demo/math.html',
            controller: 'MathController'
        })
        .when('/numbers', {
            redirectTo: '/math'
        })
        .when('/demoRequest', {
            templateUrl: 'views/demo/request.html',
            controller: 'RequestController'
        })
        .when('/user', {
            templateUrl: 'views/demo/user.html',
            controller: 'UserController'
        })
        .otherwise({
            templateUrl: 'views/main.html', // relativ la root-ul aplicatiei ('/')
            controller: 'MainController'
        });
}]);