MySite.service('kuralService', function($http) {
    function getKural() {
        return $http.get('./thirukural.json').then(function(resp){
            return resp.data;
        });
    }
    return {
        getKural: getKural
    };
});