const palindromes = function (string) {
  let lowerString = string.toLowerCase()
  let replacePunctuation = lowerString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  let removeSpaces = replacePunctuation.replace(/\s{2,}/g, " ")
  let removeSpaces2 = removeSpaces.replaceAll(" ", "")
  let stringArr = replacePunctuation.split("")
  let reversed = stringArr.reverse()
  let reversedString = reversed.join("")
  let reversedStringToo = reversedString.replaceAll(" ", "")
  if (reversedStringToo.toLowerCase() === removeSpaces2) {
    return true
  } else return false
};

// Do not edit below this line
module.exports = palindromes;
