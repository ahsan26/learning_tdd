const functions = require('./functions');

test('Adds 2 + 2 = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 != 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Adds 2 + 2 != 5', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should Be Falsy', () => {
    expect(functions.beFalsy(0)).toBeFalsy();
});

test('Should Be Object', () => {
    expect(functions.createUser('ahsan','usman')).toEqual({
        firstName:'ahsan',
        lastName:'usman'
    });
});