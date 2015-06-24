import aur = require("aurelia-router");
import app = require("app/aurelia/app-state")

export class Admin {
  static inject = [aur.Router, aur.AppRouter];

  heading: string;

  constructor(private router: aur.Router, private appRouter: any) {
    this.heading = "Admin";

    router.configure(config => {
      config.map([
        { route: ["", "home"],  moduleId: "app/admin/admin-home",           nav: true,  title: "home" },
        { route: "profile",     moduleId: "app/admin/admin-profile",        nav: true,  title: "profile" },
        { route: "logout",      moduleId: "app/admin/admin-logout",         nav: true,  title: "logout" }
      ]);
    });
  }

  canActivate(): any {
    if (app.state.isAuthenticated)
      return true;

    return new app.Redirect("#/login?origin=#/" + this.appRouter.history.fragment);
  }


}
