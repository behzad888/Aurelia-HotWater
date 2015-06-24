define(["require", "exports", "app/aurelia/app-state"], function (require, exports, app) {
    var AdminLogout = (function () {
        function AdminLogout() {
            this.heading = "Logout";
        }
        AdminLogout.prototype.canActivate = function () {
            app.state.logout();
            return new app.Redirect("#/");
        };
        return AdminLogout;
    })();
    exports.AdminLogout = AdminLogout;
});
//# sourceMappingURL=admin-logout.js.map