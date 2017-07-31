$(function () {

    var model = new Model();

    $.ajax({
        url: "/RWDtest/NewPage",
        type: "POST",
        data: {},
        success: SuccessCallback,
        error: FailureCallback
    });

    function SuccessCallback(data) {
        alert(this.getViewModel().data);
    }
    function FailureCallback(data) {
        alert(data.status);
    }
})