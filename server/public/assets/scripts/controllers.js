myApp.controller('UserController', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
  var userObject = {};
  var userService = UserService;

  $scope.submit = function(data){
    userService.postData(data);
  };

  userService.getUser();
  $scope.userInfo = userService.userInfo;
  console.log("getting user info from the user controller");

}]);

myApp.controller('EventController', ['$scope', 'EventService', function($scope, EventService){
   var eventObject = {};
   var eventService = EventService;

   $scope.myDate = new Date();

   $scope.submit = function(data){
     eventService.postEvent(data);
   };

   eventService.getEvent();
   $scope.eventInfo = eventService.eventInfo;
   console.log("getting event info from the event controller")

   //$scope.delete = function() {
    //$scope.eventInfo.splice($scope.eventInfo.indexOf($scope.eventInfo), 1);

}]);
