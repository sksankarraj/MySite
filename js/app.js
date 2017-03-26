var MySite = angular.module('mine',['ui.router']);

MySite.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl:'web/front.html',
            controller:'indexController'
        })
        .state('sm', {
            url:'/brbsoon',
            templateUrl:'sm.html',
            controller:'smController'
        });
        $locationProvider.html5Mode(true);
}]);
// MySite.config(function(FacebookProvider) {
//         FacebookProvider.init('1292236160864774');
// });
MySite.run(function(){
    console.log("I'm OK");
});

MySite.controller('quoteController',function($scope, $http,  $state, $stateParams){
    $http.get('../testapi/api/me/options')
        .success(function(resp){
            console.log(resp);
        });
    var i = Math.floor(Math.random() * 1332);
    $http.get('./thirukural.json')
        .success(function(data){
            
            $scope.qoute=data.kurals[i];
        })
        .error(function(resp){
            console.log(resp);
        });
});
MySite.controller('indexController',function($scope,$timeout){
    
});
MySite.controller('smController',function($scope,$timeout){
    console.log('sm');
});