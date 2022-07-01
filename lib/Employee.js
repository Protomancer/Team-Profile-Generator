//Constructor for Employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    grabName () {
        return this.name;
    }

    grabId () {
        return this.id;
    }

    grabRole () {
        return 'Employee';
    }
};

module.exports = Employee;