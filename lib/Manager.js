//importing employee class
const Employee = require("./Employee");

//manager class extends employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //calling employee constructor
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    //override employee role to return manager
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;