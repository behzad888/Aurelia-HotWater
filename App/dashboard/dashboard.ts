import DataContext = require('../services/datacontext');
export class Welcome {
 
    public heading: string;
    public firstName: string;
    public lastName: string;
    public showAdd: boolean = false;
    newPeople : {};
    people: Array<any> = [];
    datacontext: any;
    constructor() {
        this.heading = "Welcome to the Aurelia App!";
        this.firstName = "John";
        this.lastName = "Doe";
        this.datacontext = DataContext.Datacontext;
    }
    activate() {        
        this.getPeople();
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    getPeople() {           
        return this.people = this.datacontext.getPeople();
    }
    welcome() {
        alert("Welcome, " + this.fullName + "!");
    }

    clickAdd() {      
        this.showAdd = !this.showAdd;
    }
    addPeople(person) {       
        this.people.push(person);
        this.showAdd = false;
        this.newPeople = {};
    }
}