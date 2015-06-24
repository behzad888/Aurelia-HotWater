define(["require", "exports"], function (require, exports) {
    var Datacontext = (function () {
        function Datacontext() {
        }
        Datacontext.getPeople = function () {
            var people = [
                { firstName: 'Rob', lastName: 'Eisenberg', age: 35, location: 'Tallahassee, FL' },
                { firstName: 'Behzad', lastName: 'Abbasi', age: 23, location: 'Iran' },
                { firstName: 'Vahid', lastName: 'Saberi', age: 24, location: 'Iran' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Ashley ', lastName: 'Grant', age: 33, location: 'Tallahassee, FL' },
                { firstName: 'Vildan', lastName: 'Softic', age: 26, location: 'Austria' },
                { firstName: 'Saeed', lastName: 'Salehi', age: 25, location: 'Iran' },
            ];
            return people;
        };
        Datacontext.serviceId = 'datacontext';
        return Datacontext;
    })();
    exports.Datacontext = Datacontext;
});
//# sourceMappingURL=datacontext.js.map