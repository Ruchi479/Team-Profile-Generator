//employee class
class Employee {
    constructor (id, name, email){
        this.id = id;
        this.name = name;        
        this.email = email
    }

    //returning ID from input
    getId () {
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