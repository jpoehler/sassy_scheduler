myApp.controller('UserController', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
  var userObject = {};
  var userService = UserService;

  $scope.submit = function(data){
    userService.postData(data);
  };

  userService.getUser();
  $scope.info = userService.info;

}]);

myApp.controller('EventController', ['$scope', 'EventService', function($scope, EventService){
   var eventObject = {};
   var eventService = EventService;

   $scope.myDate = new Date();

   $scope.submit = function(data){
     eventService.postEvent(data);
   };

   eventService.getEvent();
   $scope.info = eventService.info;

   $scope.showId = function(object){
     console.log(object.id);
   };

}]);
