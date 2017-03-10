var MySite = angular.module('mine',['ui.router']);

MySite.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl:'web/front.html'
        });
        $locationProvider.html5Mode(true);
}]);

MySite.run(function(){
    console.log("I'm OK");
});