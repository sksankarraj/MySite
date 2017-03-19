var MySite = angular.module('mine',['ui.router','facebook']);

MySite.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl:'web/front.html',
            controller:'indexController'
        });
        $locationProvider.html5Mode(true);
}]);
// MySite.config(function(FacebookProvider) {
//         FacebookProvider.init('1292236160864774');
// });
MySite.run(function(){
    console.log("I'm OK");
});
MySite.controller('quoteController',function($scope, $http){
    var i = Math.floor(Math.random() * 1300);
    $http.get('./thirukural.json')
        .success(function(data){
            $scope.qoute=data.kurals[i];
            console.log(data.kurals[i]);
        })
        .error(function(resp){
            console.log(resp);
        });
});
MySite.controller('indexController',function($scope,Facebook,$timeout){

});