import Employee from "./Employee";

export default class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        super(name, id, email);
        
        this.officeNo = officeNo;
    }

    getRole() {
        return 'Manager';
    }
}