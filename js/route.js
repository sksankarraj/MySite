MySite.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl:'web/home.html',
            controller:function($scope){
                $scope.title = 'Sankar Raj S';
                $scope.pageId = 1;
            }
        })
        .state('about', {
            url:'/about',
            templateUrl:'web/about.html',
            controller:function($scope){
                $scope.title = 'About Sankar Raj S';
                $scope.pageId = 2;
            }
        })
        .state('blog', {
            url:'/blog',
            templateUrl:'web/blog.html',
            controller:function($scope){
                $scope.title = 'Sankar\'s Blog';
                $scope.pageId = 3;
            }
        })
        .state('contact', {
            url:'/contact',
            templateUrl:'web/contact.html',
            controller:function($scope){
                $scope.title = 'Contact Sankar';
                $scope.pageId = 4;
            }
        })
        .state('sm', {
            url:'/brbsoon',
            templateUrl:'sm.html',
            controller:'smController'
        });
        $locationProvider.html5Mode(true);
}]);