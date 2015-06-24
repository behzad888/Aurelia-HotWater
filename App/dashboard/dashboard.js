define(["require", "exports", '../services/datacontext'], function (require, exports, DataContext) {
    var Welcome = (function () {
        function Welcome() {
            this.showAdd = false;
            this.people = [];
            this.heading = "Welcome to the Aurelia App!";
            this.firstName = "John";
            this.lastName = "Doe";
            this.datacontext = DataContext.Datacontext;
        }
        Welcome.prototype.activate = function () {
            this.getPeople();
        };
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.getPeople = function () {
            return this.people = this.datacontext.getPeople();
        };
        Welcome.prototype.welcome = function () {
            alert("Welcome, " + this.fullName + "!");
        };
        Welcome.prototype.clickAdd = function () {
            this.showAdd = !this.showAdd;
        };
        Welcome.prototype.addPeople = function (person) {
            this.people.push(person);
            this.showAdd = false;
            this.newPeople = {};
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;
});
//# sourceMappingURL=dashboard.js.map