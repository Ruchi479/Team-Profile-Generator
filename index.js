//Psuedo Code
//Ask initial question for employeeType
//Take user down that specific line of questioning

//create new objects from classes with info that would be supplied by user.

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Required module exports
const employee = require("./lib/Employee");
const employee = require("./lib/Engineer");
const employee = require("./lib/Intern");
const employee = require("./lib/Manager");

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this Employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of this Employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this Employee's email ?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee has?",
        choices: ["Engineer", "Intern", "Manager"],
    }
]

// Questions for Manager Role
managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("Please enter an office number");
                return false;
            }
        }
    }
]

//Questions for Engineer Role
engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username? (Required)",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter a Github username");
                return false;
            }
        }
    }
]

//Questions for intern Role
engineerQuestions = [
    {
        type: "input",
        name: "school",
        message: "What school is the intern from? (Required)",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter a school name");
                return false;
            }
        }
    }
]

//function to initialize the application
const init = () => {

    
}

