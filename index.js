//Psuedo Code
//Ask initial question for employeeType
//Take user down that specific line of questioning

//create new objects from classes with info that would be supplied by user.

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Required module exports
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//link to page creation
const generateHTML = require("./src/generateHTML");

// team array
const teamArray = [];

//start of manager prompts
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's ID!");
                    return false;
                } else {                    
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: "Who is the manager of this team?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
    
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { id, name, email, officeNumber} = managerInput;
        const manager = new Manager (id, name, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log('Adding employees to the team');
    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please chose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the employee's ID!");
                    return false;
                } else {                    
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: "What is the name of the employee",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an employee's name!")
                    return false;
                }
            }
        },
        
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the employee's github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username!")
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an intern's school!")
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add more team members?",
            default: false,
        }
    ])
    .then(employeeData => {
        //data for employee types
        let {id, name,  email, role, github, school, confirmAddEmployee} =employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (id, name,  email, github);
            
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (id, name, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(confirmAddEmployee){
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};


//function to generate HTML page file using file system
const writeFile = data => {
    fs.writeFile('./dist/index.html' , data, err => {
        //if there is an error
        if (err) {
            console.log(err);
            return;
            //when profile has been created
        } else{
            console.log("your team profile has been successfully created! Please check out the index.html")
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});