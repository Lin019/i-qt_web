$(function () {
    $("#btn-queue").click(function () {
        var colCount = $("table#table-queuing > tbody > tr > th").length;
        var newRowData = "<tr>";
            for(var idx = 0; idx < colCount; idx++) {
                newRowData += "<td></td>";
            }
        newRowData += "</tr>";
        $("table#table-queuing > tbody:last-child").append(newRowData);
        var lastRow = $("table#table-queuing > tbody > tr:last");

        var postData = {
            Word: $("input#Word").val(),
            Synonyms: $("textarea#Synonyms").val(),
        };

        lastRow.find("td")[0].innerHTML = $("table#table-queuing > tbody > tr").length - 1;
        lastRow.find("td")[1].innerHTML = postData.Word;
        lastRow.find("td")[2].innerHTML = postData.Synonyms;
        lastRow.find("td")[3].innerHTML = "<span class='text-info'>更新中...</span>";
        
        var token = $('input[name="__RequestVerificationToken"]', $('#__AjaxForm__')).val();

        postData.__RequestVerificationToken = token;

        $.ajax({
            type: "POST",
            url: "Create",
            data: postData,
        }).done(function (data) {
            lastRow.find("td")[3].innerHTML = "<span class='text-success'>成功</span>";
        }).fail(function (data) {
            lastRow.find("td")[3].innerHTML = "<span class='text-error'>失敗</span>";
        });
    });
})