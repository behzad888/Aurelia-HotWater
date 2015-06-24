define(["require", "exports", "aurelia-router"], function (require, exports, aur) {
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = "HotWater Aurelia";
                config.map([
                    { route: ["", "dashboard"], moduleId: "App/dashboard/dashboard", nav: true, title: "Dashboard" },
                    { route: "navigation", moduleId: "App/navigation/navigation", nav: true, title: "Navigation" },
                    { route: "login", moduleId: "App/Admin/login", nav: false, title: "login" },
                    { route: "admin", moduleId: "App/Admin/admin", nav: true, title: "Admin" },
                ]);
            });
        }
        App.inject = [aur.Router];
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=app.js.map