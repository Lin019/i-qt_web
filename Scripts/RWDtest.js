$(function () {

    var target = $(".toolbar");
    var targetHeight = $(".content").outerHeight();

    $("#header-nav a").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
    $("#menu a").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        $("#hamburger").click();
        return false;
    })

    $("#menu .menu").css({ 'top': ($(".toolbar").outerHeight()+'px') });

    $("#hamburger").click(function () {
        $(this).toggleClass("is-active");
        $("#menu .menu").toggleClass("is-active");
    });

    $(".form .input-group.date").datepicker({
        autoclose: true,
        toggleActive: true
    });

    $(document).scroll(function () {
        var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
        var opacityFlag = false;
        
        if (scrollPercent >= 0.5) {
            target.animate({
                'background-color': 'rgba(40,40,40,0)'
            });
        } else if (scrollPercent < 0.5) {
            
            target.animate({
                'background-color': 'rgba(40,40,40,0)'
            });
        }

        
    });
})