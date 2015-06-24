import aur = require("aurelia-router");

export class App {
    static inject = [aur.Router];

    constructor(private router: aur.Router) {
        this.router.configure((config) => {
            config.title = "HotWater Aurelia";
            config.map([
               { route: ["", "dashboard"], moduleId: "App/dashboard/dashboard", nav: true, title: "Dashboard" },
                { route:  "navigation", moduleId: "App/navigation/navigation", nav: true, title: "Navigation" },
                { route: "login", moduleId: "App/Admin/login", nav: false, title: "login" },
                { route:  "admin", moduleId: "App/Admin/admin", nav: true, title: "Admin" },
               
            ]);
        });
    }
}