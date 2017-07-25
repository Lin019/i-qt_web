$(function () {
    var height = $(window).height();
    $(".logbox div.logbox-body").height(height - 109);

    $(window).resize(function () {
        var height = $(window).height();
        $(".logbox div.logbox-body").height(height - 109);
    });
});