import Engineer from "../lib/Engineer";

test('create engineer object', () => {
    const engineer = new Engineer('John Doe', 1,'john.doe@test.com', 'johndoe');

    expect(engineer.name).toBe('John Doe');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('john.doe@test.com');
    expect(engineer.github).toBe('johndoe');
});

test('get engineer properties from employee properties', () => {
    const engineer = new Engineer('John Doe', 1,'john.doe@test.com', 'johndoe');

    expect(engineer.getName()).toBe('John Doe');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('john.doe@test.com');
});

test('get engineer github username', () => {
    const engineer = new Engineer('John Doe', 1,'john.doe@test.com', 'johndoe');

    expect(engineer.getGithub()).toBe('johndoe');
});

test('get engineer role', () => {
    const engineer = new Engineer('John Doe', 1,'john.doe@test.com', 'johndoe');

    expect(engineer.getRole()).toBe('Engineer');
});