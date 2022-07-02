const Intern = require('../lib/Intern');

test('Does it create the intern object?',() => {
    const intern = new Intern('Grugni', 66, 'thesmartestdwarf@fakeemail.com', 'KarakEightPeaksUni');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('Does it get the interns school?', () => {
    const intern = new Intern('Grugni', 66, 'thesmartestdwarf@fakeemail.com', 'KarakEightPeaksUni');

    expect(intern.grabSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Does it get the interns role?', () => {
    const intern = new Intern('Grugni', 66, 'thesmartestdwarf@fakeemail.com', 'KarakEightPeaksUni');

    expect(intern.grabRole()).toEqual('Intern');
});