
/*
    if user input = search  ->  reply & toggle options on  ->  user click one of the option  ->  reply form
    if user input = form    ->  reply form
    else                    ->  reply the same as input
*/
$(function () {

    

    $("#home").click(function () {
        window.location.href = 'SynonymCreate.html';
    })

    //Add chat bubble and reply
    $(".submit").click(function () {
        
        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble bubble-user\"><p>hi</p></span></li>"
        var inputText = $(".textbox").val();

        if ($(".textbox").val() != "") {

            if ($("ul li.chat-reply p").last().hasClass("saving")) {
                $("ul li.chat-user:after").last().insertAfter(innerHtml);
            }
            else {
                $("ul#chat").append(innerHtml);
            }
            $(".chat-area .chat-user p").last().text(inputText);
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

        var loadingHtml = "<div class=\"flex\"><span class=\"bubble bubble-reply\"><p class=\"saving\"><span>．</span><span>．</span><span>．</span></p></span></div>"

        setTimeout(function () {
            $("ul#chat").append(replyHtml);
            $("ul#chat li.chat-reply").last().append(loadingHtml);
            scrollToBottom();
        }, 1000);
    }

    //reply after user clicked one of the option
    function replyForm(food) {
        var replyHtml = "<form><table></table><div class=\"bg\"></form>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);
            $("ul li .bubble-reply").last().css({
                "padding": "0"
            });

            if (food == "查動態")
                $(".chat-area table").last().html("<tr><td class=\"pic\"><div class=\"bg\"><div class=\"bottom-aligner\"><ul class=\"header\"><li><h3>TPE ✈ KIX</h3><h4>2017/08/01</h4></li></ul></div></div></td></tr><tr><td><h3>CI006 17:00 ✈ 13:40</h3><h4>尚有空位</h4></td></tr></div>");
            else if (food == "查航班")
                $(".chat-area table").last().html("<tr><td class=\"pic\"><div class=\"bg\"><div class=\"bottom-aligner\"><ul class=\"header\"><li><h3>TPE ✈ KIX</h3><h4>2017/08/01</h4></li><li><a href=\"#\">選擇其他航班</a></li></ul></div></div></td></tr><tr><td><h3>CI156 08:10->11:40</h3><h4>準時 尚有空位 $5000</h4></td></tr><tr><td><h3>CI152 09:50->13:20</h3><h4>準時 尚有空位 $5000</h4></td></tr>");
            else
                $(".chat-area table").last().html("<tr class=\"no-border\"><td class=\"first\"><h3>CI006 TPE ✈ LAX 2017/07/20 17:00<h3><h4>旅客: WANG XIAOMIN<h4></td></tr><tr class=\"no-border\"><td class=\"right\"><a href=\"#\">退票</a><a href=\"#\">更改班次</a></td></tr>");
            
           // $("table td.pic a").css("margin-left", $(".bg").width() - $("table td.pic a").width() -15 + "px");
            scrollToBottom();
        }, 3000);
    }

    //reply the same as user
    function reply(replyText) {
        var replyHtml = "<p></p>"
        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);
            $(".chat-area p").last().text(replyText);
        }, 3000);
        scrollToBottom();
    }

    //reply if user enter "search"
    function replySearch() {
        var replyHtml = "<p></p>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);
            $(".chat-area p").last().text("請問你要查些什麼呢？");
            toggleOption(true);
            scrollToBottom();
        }, 3000);
    }

    //click at one of the option
    if ($(".option a").click(function () {

        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble bubble-user\"><p>hi</p></span></li>"
        $("ul#chat").append(innerHtml);
        $(".chat-area .chat-user p").last().text($(this).text());

        toggleOption(false);

        scrollToBottom();

        loading();
        replyForm($(this).text());
    }))

    function scrollToBottom() {
        $(".chat-area").scrollTop($(".chat-area ul").height());
    }

    //toggle option on or off
    function toggleOption(flag) {

        if (flag)
            $(".option").removeClass("hide");
        else {
            if(!$(".option").hasClass("hide")) $(".option").addClass("hide");
        }
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