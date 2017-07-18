
$(function () {

    $("#home").click(function () {
        window.location.href = 'SynonymCreate.html';
    })

    //Add chat bubble and reply
    $(".submit").click(function () {
        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble\"><p>hi</p></span></li>"
        var replyHtml = "<li class =\"chat-reply\"><span class=\"circle\"></span><span class=\"bubble-reply\"><p>hi</p></span></li>"

        if ($(".textbox").val() != "") {
            $("ul").append(innerHtml);
            $(".chat p").last().text($(".textbox").val());
            $("ul").append(replyHtml);
            $(".chat p").last().text($(".textbox").val());
            $(".textbox").val("");
            $(".chat").scrollTop($(".chat").height());
        }
    });

    //Prevent submission while pressing Enter key
    $("form").keypress(function (e) {
        //Enter key
        if (e.which == 13) {
            return false;
        }
    });

    //Do the same as clicking submission-button while pressing Enter key
    $('input[type=text]').on('keydown', function (e) {
        if (e.which == '13') {
            $(".submit").click();
        }
    });
})