// Modules
import inquirer from "inquirer";

// Classes
import Manager from "./Manager.js";
import Engineer from "./Engineer.js";
import Intern from "./Intern.js";

export default class Team {
    constructor() {
        this.members = [];
    }

    initializeTeam() {
        // prompts for manager info
        this.addManager()
    }

    addManager() {        
        inquirer
            .prompt([{
                type: 'input',
                message: 'Your name:',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Your employee id:',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Your email:',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Your Office Number:',
                name: 'office'
            }])
            .then(data => {
                let manager = new Manager(data.name, data.id, data.email, data.office);
                this.members.push(manager);
            })            
    }

    addMember(member) {

        inquirer
            .prompt([{
                type: 'input',
                message: 'Member name:',
                name: 'name',

            },
            {
                type: 'list',
                message: 'Member Role:',
                name: 'role',
                choices: ['Engineer', 'Intern']
            }])

        this.members.push(member);
    }

    getMembers() {
        return this.members;
    }
}

