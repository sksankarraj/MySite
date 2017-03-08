var MySite = angular.module('mine',['ui.router']);

MySite.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl:'web/front.html'
        });
});

MySite.run(function(){
    console.log("I'm OK");
});