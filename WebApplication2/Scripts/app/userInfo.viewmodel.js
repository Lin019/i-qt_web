function UserInfoViewModel(app, name, dataModel) {
    var self = this;

    // 資料
    self.name = ko.observable(name);

    // 作業
    self.logOff = function () {
        dataModel.logout().done(function () {
            app.navigateToLoggedOff();
        }).fail(function () {
            app.errors.push("登出失敗。");
        });
    };

    self.manage = function () {
        app.navigateToManage();
    };
}
