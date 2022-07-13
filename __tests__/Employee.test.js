import Employee from '../lib/Employee';

test('create Employee object', () => {
    const empoylee = new Employee('John Doe', 1, 'john.doe@test.com');

    expect(empoylee.name).toBe('John Doe');
    expect(empoylee.id).toBe(1);
    expect(empoylee.email).toBe('john.doe@test.com');
});

test('get employee name', () => {
    const empoylee = new Employee('John Doe', 1, 'john.doe@test.com');
    
    expect(empoylee.getName()).toBe('John Doe');
});

test('get employee id', () => {
    const empoylee = new Employee('John Doe', 1, 'john.doe@test.com');

    expect(empoylee.getId()).toBe(1);
});

test('get employee email', () => {
    const employee = new Employee('John Doe', 1, 'john.doe@test.com');

    expect(employee.getEmail()).toBe('john.doe@test.com');
});

test('get employee', () => {
    const empoylee = new Employee('John Doe', 1, 'john.doe@test.com');

    expect(employee.getRole()).toBe('Employee');
})