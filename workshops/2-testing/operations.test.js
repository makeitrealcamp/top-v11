// Imports
const { mathOperations, stringOperations } = require('./operations'); // CommonJS

describe('Math operations tests', () => {
  let input1 = 10;
  const input2 = 2;

  beforeAll( () => {
    console.log('Before All!')
  })

  beforeEach( () => {
    input1 += 5;
    console.log('This is called before each test:', input1);
  });

  afterEach(() => {
    input1 += 5;
    console.log('This is called after each test:', input1);
  })

  // Declare Test
  test('adds two number and returns the sum', () => {
    // preparation
    const result = mathOperations.sum(input1, input2);
    // assert
    expect(result).toBe(input1+input2);
  });
  
  test('diffs two number and returns the diff', () => {
    // preparation
    const result = mathOperations.diff(input1, input2);
    // assert
    expect(result).toBe(input1-input2);
  });
  
  test(`prod ${input1} and ${input2} and returns ${input2*input1}`, () => {
    // preparation
    const result = mathOperations.product(input1, input2);
    // assert
    expect(result).toBe(input1*input2);
  });
  
  test('divides 32 and 4 and returns 8', () => {
    // preparation
    const result = mathOperations.division(32, 4);
    // assert
    expect(result).toBe(8);
  });
});

describe('Additional Math operations tests', () => {
  test('adding pos integers is NOT zero', () => {
    // preparation
    const result = mathOperations.sum(24, 11);
    // assert
    expect(result).not.toBe(0);
  });

  test('adding pos integers is greater than zero', () => {
    // preparation
    const result = mathOperations.sum(24, 11);
    // assert
    expect(result).toBeGreaterThan(0);
  });  
})

describe('String operations tests', () => {
  test('gets a string and returns a greting', () => {
    // preparation
    const result = stringOperations.greeting('Topv11');
    // assert
    expect(result).toBe('Hello Topv11');
  });

  test('gets a string and returns sliced string from position 2', () => {
    // preparation
    const result = stringOperations.slice('Make It Real!');
    // assert
    expect(result).toBe('ke It Real!');
  });

  test('gets a string ending with Real and returns sliced string containing Real', () => {
    // preparation
    const result = stringOperations.slice('Make It Real!');
    // assert
    expect(result).toMatch(/Real/);
  });
});

