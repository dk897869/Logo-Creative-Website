

$(window).on("load", function(){
    $('#status').delay(1000).fadeOut();
    $('#preloader').delay(1000).fadeOut(1000)
})



$(function () {
    $('.progress-bar').each(function () {

        $(this).animate({


            width: $(this).attr("aria-valuenow") + "%"
        }, 2000);

    });
});

$(function(){
    $("#team-members").owlCarousel({
       item: 2,
       autoplay: true,
       loop: true,
      
       
       autoplayhoverpause: true,
       
       
        
    });
});


$('#services-tabs').responsiveTabs({
   
});