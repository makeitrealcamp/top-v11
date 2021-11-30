const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },
  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  }
}

const stringOperations = {
  greeting: function(str) {
    return `Hello ${str}`;
  },
  slice: function(str) {
    return str.slice(2);
  }
}

module.exports = { mathOperations, stringOperations };


