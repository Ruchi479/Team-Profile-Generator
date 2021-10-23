//importing employee class
const Employee = require("./Employee");

//intern class extends employee class
class Intern extends Employee {
    constructor(name, id, email, school){
        //calling employee constructor
        super (name, id, email);
        this.school = school;
    }

    //returing school from input
    getSchool () {
        return this.school;
    }

    //override employee role to return intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;