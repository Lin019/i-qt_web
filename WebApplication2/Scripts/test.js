
/*
    if user input = search  ->  reply & toggle options on  ->  user click one of the option  ->  reply form
    if user input = form    ->  reply form
    else                    ->  reply the same as input
*/
$(function () {

    $(".wapper").height = $(".chat").height();

    $("#home").click(function () {
        window.location.href = 'SynonymCreate.html';
    })

    //Add chat bubble and reply
    $(".submit").click(function () {

        adjustChatHeight();

        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble\"><p>hi</p></span></li>"
        var inputText = $(".textbox").val();

        if ($(".textbox").val() != "") {

            if ($("ul li.chat-reply p").last().hasClass("saving")) {
                $("ul li.chat-user:after").last().insertAfter(innerHtml);
            }
            else {
                $("ul").append(innerHtml);
            }
            $(".chat .chat-user p").last().text(inputText);            
            $(".textbox").val("");
            scrollToBottom();

            loading();

            if (inputText == "form")
                replyForm();
            else if (inputText == "search")
                replySearch();
            else
                reply(inputText);
        }
    });

    //reply loading animation
    function loading() {
        var replyHtml = "<li class =\"chat-reply\"><span class=\"circle\"></span></li>"

        var loadingHtml = "<div class=\"flex\"><span class=\"bubble-reply\"><p class=\"saving\"><span>．</span><span>．</span><span>．</span></p></span></div>"

        setTimeout(function () {
            $("ul").append(replyHtml);
            $("ul li.chat-reply").last().append(loadingHtml);
            scrollToBottom();
        }, 1000);
    }

    //reply after user clicked one of the option
    function replyForm(food) {
        var replyHtml = "<form><table></table></form>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);

            if (food == "coffee")
                $(".chat table").last().html("<tr><td><img src=\"Images/food_coffee_beans.jpg\"></td></tr><tr><td><a href=\"#\">check</a></td></tr><tr><td><a href=\"#\">cancel</a></td></tr>");
            else if (food == "strawberry")
                $(".chat table").last().html("<tr><td><img src=\"Images/food_strawberry.jpg\"></td></tr><tr><td><a href=\"#\">check</a></td></tr><tr><td><a href=\"#\">cancel</a></td></tr>");
            else
                $(".chat table").last().html("<tr><td><img src=\"Images/food_bread.jpg\"></td></tr><tr><td><a href=\"#\">check</a></td></tr><tr><td><a href=\"#\">cancel</a></td></tr>");

            scrollToBottom();
        }, 3000);
    }

    //reply the same as user
    function reply(replyText) {
        var replyHtml = "<p></p>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);
            $(".chat p").last().text(replyText);
            scrollToBottom();

        }, 3000);
    }

    //reply if user enter "search"
    function replySearch() {
        var replyHtml = "<p></p>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);
            $(".chat p").last().text("請問你要查些什麼呢？");
            toggleOption(true);
            adjustChatHeight();
            scrollToBottom();
        }, 3000);
    }

    //click at one of the option
    if ($(".option a").click(function () {

        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble\"><p>hi</p></span></li>"
        $("ul").append(innerHtml);
        $(".chat .chat-user p").last().text($(this).text());

        toggleOption(false);
        adjustChatHeight();

        scrollToBottom();

        loading();
        replyForm($(this).text());
    }))

    function scrollToBottom() {
        $(".chat").scrollTop($(".chat ul").height());
    }

    //toggle option on or off
    function toggleOption(flag) {

        if (flag)
            $(".option").removeClass("hide");
        else {
            if(!$(".option").hasClass("hide")) $(".option").addClass("hide");
        }
    }

    //adjust height of the chat area
    function adjustChatHeight() {
        if ($(".option").hasClass("hide"))
            $(".chat").css("bottom", "60px");
        else
            $(".chat").css("bottom", "60px");
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