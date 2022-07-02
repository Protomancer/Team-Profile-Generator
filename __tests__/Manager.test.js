const Manager = require('../lib/Manager');

test('Does it create the manager object?', () => {
    const manager = new Manager('Thorgim', 21, 'wheresmythrone@fakeemail.com', 11);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Does it find the managers role?', () => {
    const manager = new Manager('Thorgim', 21, 'wheresmythrone@fakeemail.com', 11);
  
    expect(manager.grabRole()).toEqual('Manager');
});