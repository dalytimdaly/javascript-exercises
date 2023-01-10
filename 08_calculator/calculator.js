const add = function(a, b) {
  let c = a + b
	return c
};

const subtract = function(a, b) {
	let c = a - b
  return c
};

const sum = function(array) {
    let sum = array.reduce((a,b) => a+b, 0)
    return sum
};

const multiply = function(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total = array.reduce((a,b) => a*b)
  }
  return total
};

const power = function(a, b) {
	let total = a
  for (let i = 1; i < b; i++) {
    total = total * a
  }
  return total
};

const factorial = function(a) {
	let factor = a
  if (factor < 0) {
    return null
  } else if (factor === 0) {
    return 1
  } else if (factor === 1) {
    return factor
  } else if (factor > 1) {
    return (factor * factorial(factor - 1))
  } else
    return 'fuck'
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
