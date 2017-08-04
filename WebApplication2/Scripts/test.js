
/*
    if user input = search  ->  reply & toggle options on  ->  user click one of the option  ->  reply form
    if user input = form    ->  reply form
    else                    ->  reply the same as input
*/
$(function () {

    var state = "";
    var data = [];

    $("#home").click(function () {
        
    })

    //Add chat bubble and reply
    $(".submit").click(function () {

        input($(".textbox").val());

        $(".textbox").val("");
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

            if (food == "查動態") {
                $(".chat-area table").last().html("<tr><td class=\"pic\"><div class=\"bg\"><div class=\"bottom-aligner\"><ul class=\"header\"><li><h3>TPE ✈ KIX</h3><h4>2017/08/01</h4></li></ul></div></div></td></tr><tr><td><h3>CI006 17:00 ✈ 13:40</h3><h4>尚有空位</h4></td></tr></div>");

                $(".chat-area table .header h4").text(data[1]);
                $(".chat-area table tr h3").last().text(data[0] + " 17:00 ✈ 13:40");
            }
            else if (food == "查航班") {
                $(".chat-area table").last().html("<tr><td class=\"pic\"><div class=\"bg\"><div class=\"bottom-aligner\"><ul class=\"header\"><li><h3>TPE ✈ KIX</h3><h4>2017/08/01</h4></li><li><a class=\"choose-flight\" href=\"#\">選擇其他航班</a></li></ul></div></div></td></tr><tr><td><h3>CI156 08:10->11:40</h3><h4>準時 尚有空位 $5000</h4></td></tr><tr><td><h3>CI152 09:50->13:20</h3><h4>準時 尚有空位 $5000</h4></td></tr>");

                $(".chat-area table .header h3").text(data[0] + " ✈ " + data[1]);
                $(".chat-area table .header h4").text(data[2]);
            }
            else {
                $(".chat-area table").last().html("<tr class=\"no-border\"><td class=\"first\"><h3>CI006 TPE ✈ LAX 2017/07/20 17:00<h3><h4>旅客: WANG XIAOMIN</h4></td></tr><tr class=\"no-border\"><td class=\"right\"><a href=\"#\">退票</a><a href=\"#\">更改班次</a></td></tr>");
                $(".chat-area table h4").text("旅客： " + data[1]);
            }
            scrollToBottom();
            reset();
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
            var options = ["查動態", "查航班", "改訂位"];
            toggleOption(true, options);
            scrollToBottom();
        }, 3000);
    }

    function replyAsk() {
        var replyHtml = "<p></p>"

        setTimeout(function () {
            $("ul li .bubble-reply").last().html("");
            $("ul li .bubble-reply").last().append(replyHtml);

            if (state == "出發") {
                $(".chat-area p").last().text("您想從哪裡出發？");
                var options = ["桃園", "大阪", "北京", "洛杉磯"];
                toggleOption(true, options);
            }
            else if (state == "飛往") {
                $(".chat-area p").last().text("您想飛往哪一個機場？");
                var options = ["桃園", "大阪", "北京", "洛杉磯"];
                toggleOption(true, options);
            }
            else if (state == "日期") {
                $(".chat-area p").last().text("您要查哪一天的航班？(例: 2017/4/1)");
            }
            else if (state == "班機") {
                $(".chat-area p").last().text("請輸入班機代號(ex:CI006)，我來為您查詢。");
            }
            else if (state == "班機日期") {
                $(".chat-area p").last().text("請輸入日期");
            }          
            else if (state == "代號") {
                $(".chat-area p").last().text("請問您有「訂位代號」或是「機票號碼」嗎？需要其中一項資料我才能為您變更定位喔！ (訂位代號ex：AB1222；機票號碼ex：123456789012345)");
            }
            else if (state == "名字") {
                $(".chat-area p").last().text("好的，跟您確認一下旅客姓名拼音？ (ex:WANG XIAOMIN)");
            }
            //toggleOption(true);
            scrollToBottom();
        }, 3000);
    }

    //click at one of the option
    $(document).on('click', '.option a', function () {
        input($(this).text());
    });

    $(document).on('click', 'a.choose-flight', function () {
        input($(this).text());
    });

    //user input
    function input(inputText) {
        var innerHtml = "<li class =\"chat-user\"><span class=\"bubble bubble-user\"><p>hi</p></span></li>"
        $("ul#chat").append(innerHtml);
        $(".chat-area .chat-user p").last().text(inputText);
        toggleOption(false, []);

        if (inputText != "") {

            scrollToBottom();

            loading();
            
            if (inputText == "查航班" || inputText == "選擇其他航班") {
                reset();
                state = "出發";
                replyAsk();
            }
            else if (inputText == "查動態") {
                reset();
                state = "班機";
                replyAsk();
            }
            else if (inputText == "改訂位") {
                reset();
                state = "代號";
                replyAsk();
            }
            else if (inputText == "search" || inputText == "Search") {
                reset();
                replySearch();
            }
            else if (state == "出發") {
                data.push(inputText);
                state = "飛往";
                replyAsk();
            }
            else if (state == "飛往") {
                data.push(inputText);
                state = "日期";
                replyAsk();
            }
            else if (state == "日期") {
                data.push(inputText);
                replyForm("查航班");

            }
            else if (state == "班機") {
                data.push(inputText);
                state = "班機日期";
                replyAsk();
            }
            else if (state == "班機日期") {
                data.push(inputText);
                replyForm("查動態");
            }
            else if (state == "代號") {
                data.push(inputText);
                state = "名字";
                replyAsk();
            }
            else if (state == "名字") {
                data.push(inputText);
                replyForm("改訂位");
            }
            else
                reply(inputText);
        }
    }

    function reset() {
        state = "";
        data = [];
    }

    function scrollToBottom() {
        $(".chat-area").scrollTop($(".chat-area ul").height());
    }

    //toggle option on or off
    function toggleOption(flag, options) {

        var optionHtml = "<div class=\"bubble bubble-option\"><a href=\"#\"></a></div>";

        $(".option").html("");
        for (var i = 0 ; i < arguments[1].length ; i++) {
            $(".option").append(optionHtml);
            $(".option a").eq(i).text(arguments[1][i]);
        }
        

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