myApp.factory('UserService', ['$http', function($http){
     var info = {};


    var postUser = function(info){
      $http.post('/user', info).then(function(response){
        console.log('Made it to the post user in the factory', info);
        getEvents();
      });
    };

    var getUser = function(){
      $http.get('/user', info).then(function(response){
        console.log('Got some users from the factory');
        info.response = response.data
      });
    };

    return {
        //public
        postUser : postUser,
        getUser : getUser,
        info : info
    };
}]);

myApp.factory('EventService', ['$http', function($http){
     var info = {};

    var postEvent = function(info){
      $http.post('/events', info).then(function(response){
        console.log('Made it to the post event in the factory', info);
        getEvent();
      });
    };

    var getEvent = function(){
      console.log("GET EVENT FIRED!");
      $http.get('/user/events').then(function(response){
        console.log('Got some events from the factory(info)', info);
        info.response = response.data;
        console.log('response.data', response.data);
      });
    };

    return {
        //public
        postEvents : postEvent,
        getEvent : getEvent,
        info : info
    };
}]);
