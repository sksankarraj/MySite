MySite.controller('quoteController', function ($scope, $timeout, $http, $state, $stateParams, kurals) {
    $scope.quote = kurals;
    $scope.pageClass = 'quote-view';
    var qTime = 5000,
        i = 0;
    $('#loadTime').text(qTime / 1000);
    $('#btnP').addClass('fapause');
    var loadTOut = function (Tcb, Icb, time) {
        var Tid = setTimeout(Tcb, time);
        var Iid = setInterval(Icb, 1000);
        this.isActive = true;
        this.stop = function () {
            this.isActive = false;
            clearTimeout(Tid);
            clearInterval(Iid);
        };
    };
    var int = function () {
        i += 1;
        $('#loadTime').text($('#loadTime').text() - 1);
        $('.loader').animate({
            "width": (i / ((qTime / 1000) - 1)) * 100 + '%'
        }, 1000);
    };
    var tOut = function () {
        $state.go('/');
        t.stop();
    };
    var t = new loadTOut(tOut, int, qTime);
    $('#btnP').click(function () {
        if (t.isActive) {
            t.stop();
            $(this).removeClass('fapause');
            $(this).addClass('faplay');
        } else {
            t = new loadTOut(tOut, int, $('#loadTime').text() * 1000);
            $(this).removeClass('faplay');
            $(this).addClass('fapause');
        }
    });
});
MySite.controller('indexController', function ($scope, $http, $state, $stateParams, $window) {
    $scope.pageClass = 'index-view';
    $scope.title = 'Sankar Raj S';
    $scope.myName = 'Sankar Raj';
    $scope.pageId = 1;
    $http.get('../testapi/api/me/options')
        .success(function (resp) {
            if (resp[0].under_dev) {
                $state.go('sm');
            }
        });
    var dateDiff = function (d1, d2) {
        this.getMinDiff = function () {
            var temp = Math.abs(d1.getTime() - d2.getTime());
            return Math.floor(temp / (1000 * 60));
        };
  var strArr = 'ABCDEFGHIIJKLMNOPQRSTUVWZ'.split('');
  var nameArr = $scope.myName.toUpperCase().split('');
  console.log(nameArr);
  for(var i = 0; i<= nameArr.length - 1; i++){
    doChange(nameArr[i], i);
  }
  function doChange(chr,i){
   var Sint = setInterval(function(){
      var rnd = Math.floor(Math.random() * 25);
      nameArr[i] = strArr[rnd];
      var str = nameArr.join('');
      $('.my-name').text(str)
    },i*80);
   var tim = setTimeout(function(){
      clearInterval(Sint);
      nameArr[i] = chr;
      var str = nameArr.join('');
      $('.my-name').text(str)
    }, (i+1) * 1000)
  }
    }
    var now = new Date();
    if ($window.sessionStorage.getItem('q') != null)
        var diff = new dateDiff(new Date(), new Date($window.sessionStorage.getItem('q')));
    //console.log($window.sessionStorage.getItem('q'), (now.getMinutes() - new Date($window.sessionStorage.getItem('q')).getMinutes()));
    if ($window.sessionStorage.getItem('q') == null || (diff.getMinDiff() >= 10)) {
        $state.go('qod');
        console.log($window.sessionStorage.getItem('q'), 'out');
        $window.sessionStorage.setItem('q', now);
    }
});
MySite.controller('aboutController', function ($scope, $timeout) {
    $scope.pageClass = 'about-view';
    $scope.title = 'About Sankar Raj S';
    $scope.pageId = 2;
});
MySite.controller('blogController', function ($scope, $timeout) {
    $scope.pageClass = 'blog-view';
    $scope.title = 'Sankar\'s Blog';
    $scope.pageId = 3;
});
MySite.controller('contactController', function ($scope, $timeout) {
    $scope.pageClass = 'contact-view';
    $scope.title = 'Contact Sankar';
    $scope.pageId = 4;
});

MySite.controller('smController', function ($scope, $timeout) {
    console.log('sm');
});