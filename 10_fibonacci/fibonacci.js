

const fibonacci = function(int) {
  let integer = parseInt(int)
  let a = 1
  let b = 1
  if (int < 0) {
    return "OOPS"
  } else
  for (let i = 0; i < integer - 2; i++) {
    let c = a + b
    a = b
    b = c 
  }
  return b
};

// Do not edit below this line
module.exports = fibonacci;
