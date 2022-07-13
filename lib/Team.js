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
        this.promptManagerInfo()
            .then(() => {this.promptMemberInfo()}); 
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

    // prompts for member info
    promptMemberInfo() {
        console.log(`
--------------------
New Member
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
                        .then(() => {console.log(this.getMembers())});
                } else {

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

