define(["require", "exports", "aurelia-router"], function (require, exports, aur) {
    var NavTest = (function () {
        function NavTest(theRouter) {
            this.theRouter = theRouter;
            this.heading = "Navigation";
            this.examples = new Array("#/", "#/admin/profile", "http://aurelia.io/");
            this.destination = "#/admin/profile";
        }
        NavTest.prototype.selectExample = function (destination) {
            this.destination = destination;
            //alert(destination);
        };
        NavTest.prototype.navigateToDestination = function () {
            this.theRouter.navigate(this.destination, true);
        };
        NavTest.inject = [aur.Router];
        return NavTest;
    })();
    exports.NavTest = NavTest;
});
//# sourceMappingURL=navigation.js.map