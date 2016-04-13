myApp.controller('UserController', ['$scope', '$http', 'UserService', function($scope, $http, EventService) {
  var userObject = {};
  var userService = UserService;

  $scope.submit = function(data){
    userService.postData(data);
  };
}]);

myApp.controller('EventController', ['$scope', 'EventService', function($scope, EventService){
   var eventService = EventService;

   eventService.getData();
   $scope.data = eventService.data;

   $scope.showId = function(object){
     console.log(object.id);
   };

}]);
