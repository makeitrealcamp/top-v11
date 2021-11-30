// Imports
const { mathOperations, stringOperations } = require('./operations'); // CommonJS

const sumResult = mathOperations.sum(5, 9);
console.log('sum:', sumResult);

const diffResult = mathOperations.diff(10, 5);
console.log('diff:', diffResult);

console.log(stringOperations.greeting('World!'))

console.log(stringOperations.slice('Make It Real!'))
console.log(stringOperations.slice(['Make', 'It', 'Real', 'Top', 'V11']))