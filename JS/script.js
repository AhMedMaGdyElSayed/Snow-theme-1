$(document).ready(function(){
    // change navbar with scroll
    $(window).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        var image = $('.navbar .navbar-brand img')
        if ($(this).scrollTop() > $nav.height()) {
            image.attr("src", "images/logo.png")
        } else {
            image.attr("src", "images/logo-light.png")
        }
    });

    // make the header height equal to screen height
    var myHeader = $('header');
    myHeader.height($(window).height());
    // resize it with inspect
    $(window).resize(function(){
        myHeader.height($(window).height());
    });

    //scroll smoothly when clicking in links
    $('.nav-link').click(function() {
        var scrollTo = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(scrollTo).offset().top
        }, 1500);
    });

    // scroll smothly with arrow to about
    $('.arrow').click(function(){
        $('html, body').animate({scrollTop: $('#about').offset().top}, 2000)
    });
});