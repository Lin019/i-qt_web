
$(function () {

    $("#home").click(function () {
        window.location.href = 'SynonymCreate.html';
    })

    //Add chat bubble and reply
    $(".submit").click(function () {

        adjustChatHeight();

        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble\"><p>hi</p></span></li>"
        var inputText = $(".textbox").val();

        if ($(".textbox").val() != "") {

            if ($("ul li p").last().hasClass("saving")) {
                $("ul li.chat-user:after").last().insertAfter(innerHtml);
            }
            else {
                $("ul").append(innerHtml);
            }
            $(".chat .chat-user p").last().text(inputText);            
            $(".textbox").val("");
            $(".chat").scrollTop($(".chat ul").height());

            loading();

            if (inputText == "form")
                replyForm();
            else if (inputText == "search")
                replySearch();
            else
                reply(inputText);
        }
    });

    function loading() {
        var replyHtml = "<li class =\"chat-reply\"><span class=\"circle\"></span></li>"

        var loadingHtml = "<div class=\"flex\"><span class=\"bubble-reply\"><p class=\"saving\"><span>．</span><span>．</span><span>．</span></p></span></div>"

        setTimeout(function () {
            $("ul").append(replyHtml);
            $("ul li").last().append(loadingHtml);
            $(".chat").scrollTop($(".chat ul").height());
        }, 1000);
    }

    function replyForm(food) {
        var replyHtml = "<form><table></table></form>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);

            if (food == "coffee")
                $(".chat table").last().html("<img src=\"/Images/food_coffee_beans.jpg\"><a href=\"#\">check</a>");
            else if (food == "strawberry")
                $(".chat table").last().html("<img src=\"/Images/food_strawberry.jpg\"><a href=\"#\">check</a>");
            else
                $(".chat table").last().html("<img src=\"/Images/food_bread.jpg\"><a href=\"#\">check</a>");

            $(".chat").scrollTop($(".chat ul").height());
        }, 3000);
    }

    function reply(replyText) {
        var replyHtml = "<p></p>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);
            $(".chat p").last().text(replyText);
            $(".chat").scrollTop($(".chat ul").height());

        }, 3000);

    }

    function replySearch() {
        var replyHtml = "<p></p>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);
            $(".chat p").last().text("請問你要查些什麼呢？");
            toggleOption(true);
            adjustChatHeight();
            $(".chat").scrollTop($(".chat ul").height());
        }, 3000);
    }

    if ($(".option a").click(function () {

        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble\"><p>hi</p></span></li>"
        $("ul").append(innerHtml);
        $(".chat .chat-user p").last().text($(this).text());

        toggleOption(false);
        adjustChatHeight();

        $(".chat").scrollTop($(".chat ul").height());

        loading();
        replyForm($(this).text());
    }))

    function toggleOption(flag) {

        if (flag)
            $(".option").removeClass("hide");
        else {
            if(!$(".option").hasClass("hide")) $(".option").addClass("hide");
        }
    }

    function adjustChatHeight() {
        if ($(".option").hasClass("hide"))
            $(".chat").css("bottom", "51px");
        else
            $(".chat").css("bottom", "83px");
    }

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