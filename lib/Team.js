// Modules
import inquirer from "inquirer";

// Classes
import Manager from "./Manager.js";
import Engineer from "./Engineer.js";
import Intern from "./Intern.js";

// Methods
import { generatePage } from "../src/generate-html.js";

export default class Team {
    constructor() {
        this.members = [];
    }

    initializeTeam() {
        this.promptManagerInfo()
            .then(() => {this.promptNewMember()}) 
    }

    // prompts for manager info
    promptManagerInfo() {
        console.log(`--------------------
  Create Your Team
--------------------`)
        return inquirer
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
                message: 'Your office number:',
                name: 'office'
            }])
            // creates Manager object from prompts
            .then(data => {
                this.addMember(new Manager(data.name, data.id, data.email, data.office));
            })          
    }

    // prompts to add a new member
    promptNewMember() {
        console.log(`--------------------`);
        
        return inquirer
            .prompt({
                type: 'confirm',
                message: 'Add member',
                name: 'confirmAddMember',
                default: false
            })
            .then(({confirmAddMember}) => {
                if (confirmAddMember) {this.promptMemberInfo()}
                else {
                    // Generates Page
                    generatePage(this.getMembers());
                };


            })
    }

    // prompts for member info
    promptMemberInfo() {
        console.log(`
--------------------`);

        return inquirer
            .prompt([{
                type: 'input',
                message: 'Member name:',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Member id:',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Member email:',
                name: 'email'
            },
            {
                type: 'list',
                message: 'Member Role:',
                name: 'role',
                choices: ['Engineer', 'Intern']
            }])
            .then((data) => {
                // prompts for github if role selected is engineer
                if (data.role === 'Engineer') {
                    inquirer
                        .prompt({
                            type: 'input',
                            message: 'Github username:',
                            name: 'github'
                        })
                        // creates Engineer object from prompts
                        .then(githubPrompt => {
                            this.addMember(new Engineer(data.name, data.id, data.email, githubPrompt.github));
                        })
                        .then(() => {this.promptNewMember()});
                } else {
                    inquirer
                        .prompt({
                            type: 'input',
                            message: 'School:',
                            name: 'school'
                        })
                        // creates Intern object from prompts
                        .then(schoolPrompt => {
                            this.addMember(new Intern(data.name, data.id, data.email, schoolPrompt.school));
                        })
                        .then(() => {this.promptNewMember()});
                }
            })
    }

    addMember(member) {
        this.members.push(member);
    }

    getMembers() {
        return this.members;
    }
}

