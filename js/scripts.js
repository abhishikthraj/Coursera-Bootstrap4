$(document).ready(function(){
    $("#login").click(function(){
        $("#loginModal").modal('toggle');
    });
    $(".close").click(function(){
        $("#loginModal").modal('hide');
    });
    $("#cancellogin").click(function(){
        $("#loginModal").modal('hide');
    });
    $("#reserve").click(function(){
        $("#reserveModal").modal('toggle');
    });
    $(".close").click(function(){
        $("#reserveModal").modal('hide');
    });
    $("#cancelreserve").click(function(){
        $("#reserveModal").modal('hide');
    });

    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    });
});