$(function () {

    var target = $(".toolbar");
    var targetHeight = $(".content").outerHeight();

    //test
    var test_flag = true;

    $("#header-nav a").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });

    $('ul li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $("#test-data").click(function () {
        if (test_flag) {
            $.ajax({
                url: "/RWDtest/GetExample",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    $("#test-data tr:nth-child(1)").append("<td>" + response.TicketId + "</td>");
                    $("#test-data tr:nth-child(2)").append("<td>" + response.From + "</td>");
                    $("#test-data tr:nth-child(3)").append("<td>" + response.To + "</td>");
                    $("#test-data tr:nth-child(4)").append("<td>" + response.strDeparture + "</td>");
                    $("#test-data tr:nth-child(5)").append("<td>" + response.strReturn + "</td>");
                    $("#test-data tr:nth-child(6)").append("<td>" + response.Adult + "</td>");
                    $("#test-data tr:nth-child(7)").append("<td>" + response.Child + "</td>");
                    $("#test-data tr:nth-child(8)").append("<td>" + response.Infant + "</td>");

                    test_flag = false;
                },
                error: function (response) {
                    alert(response.responseText);
                }
            })
        }
    })
    
    $(".input-group.date input").datepicker({
        autoclose: true,
        toggleActive: true,
        format: 'yyyy/mm/dd',
        minDate: 0
    })

    $("#return-date, #departure-date").datepicker('option', {
        beforeShow: customRange
    });

    function customRange(input) {
        if (input.id == 'return-date') {
            return {
                minDate: jQuery('#departure-date').datepicker("getDate")
            };
        } else if (input.id == 'departure-date') {
            return {
                maxDate: jQuery('#return-date').datepicker("getDate")
            };
        }
    }

    
})