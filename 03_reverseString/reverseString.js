
  const reverseString = function(string) {
    let stringArray = string.split("")
    let reverse = stringArray.reverse()
    let reverseStrung = reverse.toString()
    return reverseStrung.replaceAll(",", "")
  };


// Do not edit below this line
module.exports = reverseString;
