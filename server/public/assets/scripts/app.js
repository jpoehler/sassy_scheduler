var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);
console.log("Whee!");

myApp.config(['$routeProvider', function($routeProvider){
  console.log("I'm in routeProvider");
  $routeProvider.
        // when('/index', {
        // templateUrl: '../views/index.html'
        // // controller: 'UserController'
        // }).
        when('/user', {
            templateUrl: '../views/routes/user.html',
            controller: 'UserController'
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
        console.log('done');
}]);
