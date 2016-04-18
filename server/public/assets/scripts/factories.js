myApp.factory('UserService', ['$http', function($http){
     var userInfo = {};
     var eventInfo = {};

    var postUser = function(userInfo){
      $http.post('/user', userInfo).then(function(response){
        getEvents();
      });
    };

    var getUser = function(){
      $http.get('/user', userInfo).then(function(response){
        userInfo.response = response.data;
      });
    };

    return {
        //public
        postUser : postUser,
        getUser : getUser,
        userInfo : userInfo
    };
}]);

myApp.factory('EventService', ['$http', function($http){
    var eventInfo = {};

    var postEvent = function(eventInfo){
      $http.post('/events', eventInfo).then(function(response){
        getEvent();
      });
    };

    var getEvent = function(){
      console.log("GET EVENT FIRED!");
      $http.get('/user/events').then(function(response){
        eventInfo.response = response.data;
      });
    };

    return {
        //public
        postEvents : postEvent,
        getEvent : getEvent,
        eventInfo : eventInfo
    };
}]);
