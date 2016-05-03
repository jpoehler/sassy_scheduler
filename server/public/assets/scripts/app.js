var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/index', {
    templateUrl: '../views/index.html'
    // controller: 'UserController'
    }).
  when('/user', {
    templateUrl: '../views/routes/user.html',
    controller: 'UserController',
    controller: 'EventController'
  }).
  when('/events', {
    templateUrl: '../views/routes/events.html',
    controller: 'EventController'
  }).
  when('/register', {
    templateUrl: '../views/routes/register.html',
    controller: 'UserController'
  }).
  otherwise({
    redirectTo: '/user'
  });
}]);
