const inquirer = require('inquirer');
const fs = require('fs');


const createHTML = require('./src/createHTML');
//Import Employee data
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//required modules from node

const profileArray = [];

const makeManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is your team Manager?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ('Invalid Input')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Manager ID',
            validate: inputName => {
                if (isNaN(inputName)) {
                    console.log ('Invalid manager ID')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Manager email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Invalid Email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Manager office number',
            validate: inputName => {
                if (isNaN(inputName)) {
                    console.log ('Invalid office number.')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(inputManager => {
        const { name, id, email, officeNumber } = inputManager;
        const manager = new Manager (name, id, email, officeNumber);

        profileArray.push(manager);
        console.log(manager);
    })
};

const makeEmployee = () => {
    console.log (`
    **** Add Employees ****
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose employee role.',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Employee name?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ('Invalid Employee name');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'id',
            message: 'Enter employee ID',
            validate: inputName => {
                if (isNaN(inputName)) {
                    console.log ('invalid emplyess ID')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email.',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Invalid Email.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Employee GitHub username.',
            when: (input) => input.role === 'Engineer',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log ('Invalid GitHub username.')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Intern School.',
            when: (input) => input.role === 'Intern',
            validate: inputName => {
                if (inputName) {
                    return true;
                }else {
                    console.log ('Invalid Intern School.')
                }
            }
        },
        {
            type: 'confirm',
            name: 'addConfirmation',
            message: 'Add more employees?',
            default: false
        }
    ])
    .then(employeeInputs => {

        let { name, id, email, role, github, school, addConfirmation } = employeeInputs;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        profileArray.push(employee);

        if (addConfirmation) {
            return makeEmployee(profileArray)
        } else {
            return profileArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been generated in the HTML file')
        }
    })
};

makeManager()
.then(makeEmployee)
.then(profileArray => {
    return createHTML(profileArray);
})
.then(onPage => {
    return writeFile(onPage);
})
.catch(err => {
    console.log(err);
});