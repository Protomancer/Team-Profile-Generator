const Employee = require('../lib/Employee');

test('Does it create employee object?', () => {
    const employee = new Employee('Godrick', 88, 'superSlayer@fakeemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Does it get the employee name?', () => {
    const employee = new Employee('Godrick', 88, 'superSlayer@fakeemail.com');

    expect(employee.grabName()).toEqual(expect.any(String));
});

test('Does it get the employee ID?', () => {
    const employee = new Employee('Godrick', 88, 'superSlayer@fakeemail.com');

    expect(employee.grabId()).toEqual(expect.any(Number));
});

test('Does it get employee email?',() => {
    const employee = new Employee('Godrick', 88, 'superSlayer@fakeemail.com');

    expect(employee.grabEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Does it get employee role?', () => {
    const employee = new Employee('Godrick', 88, 'superSlayer@fakeemail.com');

    expect(employee.grabRole()).toEqual('Employee');
});