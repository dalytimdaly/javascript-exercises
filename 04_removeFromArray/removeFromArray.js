
const removeFromArray = function(array, num1, num2, num3, num4) {
  let filtered = array.filter(function(item) {
    return item !== num1
  })
  let filteredAgain = filtered.filter(function(item) {
    return item !== num2
  })
  let filter3 = filteredAgain.filter(function(item) {
    return item !== num3
  })
  let filter4 = filter3.filter(function(item) {
    return item !== num4 
  })
    return filter4
}

// Alternate

/*
function removeFromArray(array, ...args) {
  return array.filter(x => !args.includes(x))
};
*/

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
