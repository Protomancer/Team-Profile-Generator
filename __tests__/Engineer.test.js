const Engineer = require('../lib/Engineer');

test('Does it create the engineer object?',() => {
    const engineer = new Engineer('Torbald', 77, 'getthaturgold@fakeemail.com', 'olDirtyTorbald');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('Does It get the engineer GitHub?' , () => {
    const engineer = new Engineer('Torbald', 77, 'getthaturgold@fakeemail.com', 'olDirtyTorbald');

    expect(engineer.GrabGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Does it get the engineer role?',() => {
    const engineer = new Engineer('Torbald', 77, 'getthaturgold@fakeemail.com', 'olDirtyTorbald');

    expect(engineer.grabRole()).toEqual('Engineer');
});




