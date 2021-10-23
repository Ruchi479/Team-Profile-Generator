//importing employee class
const Employee = require("./Employee");

//engineer class extends employee class
class Engineer extends Employee {
    constructor(name, id, email, github){
        //calling employee constructor
        super (name, id, email);
        this.github = github;
    }

    //returing github from input
    getGithub () {
        return this.github;
    }

    //override employee role to return engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;