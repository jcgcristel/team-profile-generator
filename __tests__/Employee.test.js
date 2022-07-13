import Employee from '../lib/Employee';

test('create Employee object', () => {
    const empoylee = new Employee('John Doe', 1, 'john.doe@test.com');

    expect(empoylee.name).toBe('John Doe');
    expect(empoylee.id).toBe(1);
    expect(empoylee.email).toBe('john.doe@test.com');
});