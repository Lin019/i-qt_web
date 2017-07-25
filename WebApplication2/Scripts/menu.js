$(function () {

    $("#menu li").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).children('a').attr('href')).offset().top
        }, 1000);
        $("#hamburger").click();
        return false;
    })

    $("#menu .menu").css({ 'top': ($(".toolbar").outerHeight() + 'px') });

    $(".header").css({ 'top': ($(".toolbar").outerHeight() + 'px') });

    $("#hamburger").click(function () {
        $(this).toggleClass("is-active");
        $("#menu .menu").toggleClass("is-active");
    });

})