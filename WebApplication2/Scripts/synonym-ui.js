$(function () {

    var rowCount = $("table#table-show > tbody > tr").length;
    var table = $("table#table-show");

    for (var i = 0 ; i < rowCount ; i++) {     
        if (i % 2 == 0) {
            table.find("tr").eq(i).addClass("gray");
        }
    }

    $("#create").click(function () {
        window.location.href = 'test2.html';
    })

    var toggle = true;
    $(".btn").click(function () {

        if (toggle) {
            $("div.logbox-body").animate({ right: '120px' }, function () {
                $("div.logbox-menu").slideToggle();
            })
        }
        else {
            $("div.logbox-menu").slideToggle(function () {
                $("div.logbox-body").animate({ right: '0px' });
            });
        }
        toggle = !toggle;
    })
    $(".btn").on("swipe", function () {
        $(".btn").click();
    })

    var height = $(window).height();
    $(".logbox div.logbox-body").height(height - 109);

    $(window).resize(function () {
        var height = $(window).height();
        $(".logbox div.logbox-body").height(height - 109);
    });

    $(".logbox button#edit").click(function () {
        var row = $(this).closest("tr");    


        if (row != undefined) {
            row.find(".text-word").addClass("hide");
            row.find("input.input-word").removeClass("hide");
            row.find("input.input-word").val(row.find(".text-word").text());
			
            row.find(".text-synonym").addClass("hide");
            row.find("input.input-synonym").removeClass("hide");
            row.find("input.input-synonym").val(row.find(".text-synonym").text());
			
            row.find("#form-edit").removeClass("hide");
            row.find("#btn-group-actions").addClass("hide");
        }
    })

    $(".logbox button#delete").click(function () {
        var row = $(this).closest("tr");

        if (row != undefined) {
            row.find("#form-delete").removeClass("hide");
            row.find("#btn-group-actions").addClass("hide");
        }
    })

    $(".logbox button#cancel").click(function () {
        var row = $(this).closest("tr");

        if (row != undefined) {
            row.find("input").addClass("hide");
            row.find(".text-word").removeClass("hide");
            row.find(".text-synonym").removeClass("hide");
            row.find("#form-edit").addClass("hide");
            row.find("#form-delete").addClass("hide");
            row.find("#btn-group-actions").removeClass("hide");
        }
    })

    $(".logbox form#form-edit button#confirm").click(function () {

        if (confirm("確定修改?")) {
            var row = $(this).closest("tr");

            if (row != undefined) {
                row.find("input#Word").val(row.find("input.input-word").val());
                row.find("input#Synonyms").val(row.find("input.input-synonym").val());
                row.find("form#form-edit").submit();
            }
        } else {
            $(".logbox button#cancel").click();
            
        }
    })

    $(".logbox form#form-delete button#confirm").click(function () {

        alert("確定刪除?");
        var row = $(this).closest("tr");

        if (row != undefined) {
            row.find("form#form-delete").submit();
        }
    })
});