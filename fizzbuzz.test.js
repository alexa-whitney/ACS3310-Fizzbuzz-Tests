const { isFizzy, isBuzzy, fizzyBuzzy, fizzBuzz, FIZZ, BUZZ, FIZZBUZZ } = require('./fizzbuzz');

test('FIZZ constant', () => {
    expect(FIZZ).toBe('fizz');
});

test('BUZZ constant', () => {
    expect(BUZZ).toBe('buzz');
});

test('FIZZBUZZ constant', () => {
    expect(FIZZBUZZ).toBe('fizzbuzz');
});

test('isFizzy', () => {
    expect(isFizzy(1)).toBe(false);
    expect(isFizzy(3)).toBe(true);
    expect(isFizzy(9)).toBe(true);
    expect(isFizzy(32)).toBe(false);
})

test('isBuzzy', () => {
    expect(isBuzzy(5)).toBe(true);
    expect(isBuzzy(10)).toBe(true);
    expect(isBuzzy(100)).toBe(true);
    expect(isBuzzy(0)).toBe(true); // Edge case
    expect(isBuzzy(1)).toBe(false);
    expect(isBuzzy(7)).toBe(false);
    expect(isBuzzy(99)).toBe(false);
    expect(isBuzzy(-1)).toBe(false);
    expect(isBuzzy(-6)).toBe(false);
})

test('fizzyBuzzy', () => {
    // Divisible by 3
    expect(fizzyBuzzy(3)).toBe(FIZZ);
    expect(fizzyBuzzy(6)).toBe(FIZZ);
    expect(fizzyBuzzy(9)).toBe(FIZZ);

    // Divisible by 5
    expect(fizzyBuzzy(5)).toBe(BUZZ);
    expect(fizzyBuzzy(10)).toBe(BUZZ);
    expect(fizzyBuzzy(20)).toBe(BUZZ);

    // Divisible by both 3 and 5
    expect(fizzyBuzzy(15)).toBe(FIZZ + BUZZ);
    expect(fizzyBuzzy(30)).toBe(FIZZ + BUZZ);
    expect(fizzyBuzzy(45)).toBe(FIZZ + BUZZ);

    // Not divisible by 3 or 5
    expect(fizzyBuzzy(1)).toBe('');
    expect(fizzyBuzzy(2)).toBe('');
    expect(fizzyBuzzy(4)).toBe('');
    expect(fizzyBuzzy(7)).toBe('');
    expect(fizzyBuzzy(8)).toBe('');
})

test('fizzBuzz', () => {
    // Testing for a count of 1 (should not have fizz, buzz, or fizzbuzz)
    expect(fizzBuzz(1)).toEqual({
        count: 1,
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0
    });

    // Testing for a count of 3 (only one fizz)
    expect(fizzBuzz(3)).toEqual({
        count: 3,
        fizz: 1,
        buzz: 0,
        fizzBuzz: 0
    });

    // Testing for a count of 5 (one fizz and one buzz)
    expect(fizzBuzz(5)).toEqual({
        count: 5,
        fizz: 1,
        buzz: 1,
        fizzBuzz: 0
    });

    // Testing for a count of 10 (three fizz, two buzz)
    expect(fizzBuzz(10)).toEqual({
        count: 10,
        fizz: 3,
        buzz: 2,
        fizzBuzz: 0
    });

    // Testing for a count of 15 (four fizz, two buzz, and one fizzBuzz)
    expect(fizzBuzz(15)).toEqual({
        count: 15,
        fizz: 4,
        buzz: 2,
        fizzBuzz: 1
    });
})