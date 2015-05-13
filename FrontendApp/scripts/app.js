// TODO #2 load ngRoute module
//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

// TODO #3 add default route for main page
hrApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
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
        .otherwise({
            templateUrl: 'views/main.html', // relativ la root-ul aplicatiei ('/')
            controller: 'MainController'
        });
}]);



// TODO #9 add route for http request demo page

// TODO #HR1 add routes for Employees List page and Employee View page

