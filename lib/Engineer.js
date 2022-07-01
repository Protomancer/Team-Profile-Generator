//import Employee here
const { Module } = require('module');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    GrabGithub () {
        return this.github;
    }

    grabRole () {
        return 'Engineer';
    }
}

Module.exports = Engineer;