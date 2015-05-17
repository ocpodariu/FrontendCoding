//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/numbers', {
                redirectTo: '/math'
            })
            .when('/math', {
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })


            .when('/employeeslist', {
                templateUrl: 'views/employee/employeelist.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeview/:employeeid', {
                templateUrl: 'views/employee/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .when('/employeeadd', {
                templateUrl: 'views/employee/employeeadd.html',
                controller: 'EmployeeAddController'
            })
            .when('/employeeedit/:employeeid', {
                templateUrl: 'views/employee/employeeedit.html',
                controller: 'EmployeeEditController'
            })


            .when('/jobslist', {
                templateUrl: 'views/job/joblist.html',
                controller: 'JobListController'
            })
            .when('/jobview/:jobid', {
                templateUrl: 'views/job/jobview.html',
                controller: 'JobViewController'
            })
            .when('/jobadd', {
                templateUrl: 'views/job/jobadd.html',
                controller: 'JobAddController'
            })
            .when('/jobedit/:jobid', {
                templateUrl: 'views/job/jobedit.html',
                controller: 'JobEditController'
            })


            .when('/departmentslist', {
                templateUrl: 'views/department/departmentlist.html',
                controller: 'DepartmentListController'
            })
            .when('/departmentview/:departmentid', {
                templateUrl: 'views/department/departmentview.html',
                controller: 'DepartmentViewController'
            })
            .when('/departmentadd', {
                templateUrl: 'views/department/departmentadd.html',
                controller: 'DepartmentAddController'
            })
            .when('/departmentedit/:departmentid', {
                templateUrl: 'views/department/departmentedit.html',
                controller: 'DepartmentEditController'
            })


            .when('/locationslist', {
                templateUrl: 'views/location/locationlist.html',
                controller: 'LocationListController'
            })
            .when('/locationview/:locationid', {
                templateUrl: 'views/location/locationview.html',
                controller: 'LocationViewController'
            })
            .when('/locationadd', {
                templateUrl: 'views/location/locationadd.html',
                controller: 'LocationAddController'
            })
            .when('/locationedit/:locationid', {
                templateUrl: 'views/location/locationedit.html',
                controller: 'LocationEditController'
            })


            .when('/user', {
                templateUrl: 'views/demo/user.html',
                controller: 'UserController'
            })
            .when('/colors', {
                templateUrl: 'views/demo/colors.html',
                controller: 'Colors'
            })
            .when('/forms', {
                templateUrl: 'views/demo/form.html',
                controller: 'Form'
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }])
    .run(['$rootScope',
        function ($rootScope) {

        }
    ]);