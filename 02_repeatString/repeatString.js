

const repeatString = function(string, num) {
  let array = []
  if (num < 0) {
    return "ERROR"
  } 
  for (let i = 0; i < num; i++) {
    array.push(string)
  }
  let result = array.toString()
  let repeatedString = result.replaceAll(",", "")
  return repeatedString
}


// Do not edit below this line
module.exports = repeatString;
