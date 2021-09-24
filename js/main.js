$(document).ready(function() {
    let wind = $(window).height(),
        winUp = $('.upper-bar').innerHeight(),
        winNb = $('.navbar').innerHeight();
        $('.slider').height(wind - (winUp + winNb));

    //Shuffle function
    $(".featured-work ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).data("class") === "all") {
            $(".shiffle .col").css('opacity', 1);
        }
        else {
            $(".shiffle .col").css('opacity', "0.09");
            $($(this).data("class")).parent().css('opacity', 1);
        }
    });
});