myApp.factory('UserService', ['$http', function($http){
     var info = {};


    var postUser = function(data){
      $http.post('/user', data).then(function(response){
        console.log('Made it to the post user in the factory', data);
        getEvents();
      });
    };

    var getUser = function(){
      $http.get('/user').then(function(response){
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

    var postEvent = function(data){
      $http.post('/events', data).then(function(response){
        console.log('Made it to the post event in the factory', data);
        getEvents();
      });
    };

    var getEvent = function(){
      $http.get('/events').then(function(response){
        console.log('Got some events from the factory', data);
        info.response = response.data
      });
    };

    return {
        //public
        postEvents : postEvent,
        getEvent : getEvent,
        info : info
    };
}]);
