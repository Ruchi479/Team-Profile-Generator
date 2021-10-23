//employee class
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }

    //returning ID from input
    getID () {
        return this.id;
    }

    //returning name from input
     getName () {
        return this.name;
    }

     //returning email from input
     getEmail () {
        return this.email;
    }

     //returning employee type
     getRole () {
        return 'Employee';
    }

};

//to be exported
module.exports = Employee;