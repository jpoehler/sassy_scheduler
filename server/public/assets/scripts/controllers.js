myApp.controller('UserController', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
  var userObject = {};
  var userService = UserService;

  $scope.submit = function(data){
    userService.postData(data);
  };
}]);

myApp.controller('EventController', ['$scope', 'EventService', function($scope, EventService){
   var eventObject = {};
   var eventService = EventService;

   eventService.getEvent();
   $scope.data = eventService.data;
   $scope.myDate = new Date();


   $scope.showId = function(object){
     console.log(object.id);
   };

}]);
