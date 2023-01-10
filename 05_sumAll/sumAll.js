
const sumAll = function(num1, num2) {
    if (num1 < 0) {
      return "ERROR"
    } else if (num2 < 0) {
      return "ERROR"
    } else if (typeof num1 !== "number") {
      return "ERROR"
    } else if (typeof num2 !== "number") {
      return "ERROR"
    }
    if (num1 > num2) {
    let array = [num1, num2]
    for (let i = num2; i < num1; i++) {
      let num3 = num2++
      array.splice(i, 0, num3)
    }
    let uniqueChars = [...new Set(array)]
    let sum = uniqueChars.reduce((a,b) => a+b, 0)
    return sum
  } else if (num1 < num2) {
    let array = [num1, num2]
    for (let i = num1; i < num2; i++) {
      let num3 = num1++
      array.splice(i, 0, num3)
    }
    let uniqueChars = [...new Set(array)]
    let sum = uniqueChars.reduce((a,b) => a+b, 0)
    return sum
  }
    
    
  };


// Do not edit below this line
module.exports = sumAll;
