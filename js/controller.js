
MySite.controller('quoteController',function($scope, $http,  $state, $stateParams){
    $http.get('../testapi/api/me/options')
        .success(function(resp){
            console.log('sm',resp);
            if (resp[0].under_dev){
                $state.go('sm');
            }
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