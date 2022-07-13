import Manager from "../lib/Manager";

test('create manager object', () => {
    const manager = new Manager('John Doe', 1, 'john.doe@test.com', 100);

    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('john.doe@test.com');
    expect(manager.officeNo).toBe(100);
});

test('get manager info using employee properties', () => {
    const manager = new Manager('John Doe', 1, 'john.doe@test.com', 100);

    expect(manager.getName()).toBe('John Doe');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('john.doe@test.com');
});

test('get manager role', () => {
    const manager = new Manager('John Doe', 1, 'john.doe@test.com', 100);

    expect(manager.getRole()).toBe('Manager');
})