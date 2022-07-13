import Intern from "../lib/Intern";

test('create intern object', () => {
    const intern = new Intern('John Doe', 1, 'john.doe@test.com', 'School of Test');

    expect(intern.name).toBe('John Doe');
    expect(intern.id).toBe(1);
    expect(intern.email).tobe('john.doe@test.com');
    expect(intern.school).toBe('School of Test');
});

test('get intern properties from employee class', () => {
    const intern = new Intern('John Doe', 1, 'john.doe@test.com', 'School of Test');

    expect(intern.getName()).toBe('John Doe');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).tobe('john.doe@test.com');
})

test('get intern school', () => {
    const intern = new Intern('John Doe', 1, 'john.doe@test.com', 'School of Test');
    
    expect(intern.getSchool()).toBe('School of Test');
});

test('get intern role', () => {
    const intern = new Intern('John Doe', 1, 'john.doe@test.com', 'School of Test');

    expect(intern.getRole()).toBe('Intern');
});