$(document).ready(function(){
    $('div[style]').remove();
    var qTime = 10000, i = 0;
    $('#loadTime').text(qTime/1000);
    $('#btnP').addClass('fapause');
    var loadTOut= function(Tcb,Icb,time){
        var Tid = setTimeout(Tcb,time);
        var Iid = setInterval(Icb,1000);
        this.isActive=true;
        this.stop = function(){
            this.isActive = false;
            clearTimeout(Tid);
            clearInterval(Iid);
        };
    };
    var int = function(){
       i += 1;
        $('#loadTime').text($('#loadTime').text() - 1);
         $('.loader').animate({
            "width": (i/((qTime/1000)-1)) * 100 + '%'
        },1000);
    };
    var tOut = function(){
            $('.qoute').animate( {
                "left":"-100%"
            },300);
            t.stop();
        };
    var t = new loadTOut(tOut,int,qTime);
    $('#btnP').click(function(){
        if (t.isActive){
            t.stop();
            $(this).removeClass('fapause');
            $(this).addClass('faplay');
        }
        else{
            t = new loadTOut(tOut,int,$('#loadTime').text()*1000);
            $(this).removeClass('faplay');
            $(this).addClass('fapause');
        }
    });
    
    // var tOut = setTimeout(function(){
    //         $('.qoute').animate( {
    //             "left":"-100%"
    //         },300);
    //         clearInterval(int);
    //     },qTime);
    // $('img').hover(function(){

    // });
});