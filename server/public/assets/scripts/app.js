var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/user', {
            templateUrl: '/views/routes/user.html',
            controller: 'UserController'
        }).
        when('/events', {
            templateUrl: '/views/routes/events.html',
            controller: 'EventController'
        }).
        when('/register', {
             templateUrl: 'views/routes/register.html',
             controller: 'UserController'
        }).
        otherwise({
            redirectTo: 'user'
        });
}]);
