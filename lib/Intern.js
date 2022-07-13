import Employee from "./Employee";

export default class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}