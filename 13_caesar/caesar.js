const caesar = function(string, number) {
  let stringArr = Array.from(string)
  let unicodedArr = stringArr.map((char) => char.codePointAt(0))
  let crypticArr = unicodedArr.map((num) => num + number)
  let decodedArr = crypticArr.map((int) => String.fromCharCode(int))
  console.log(stringArr)
  console.log(decodedArr)
  for (let i = 0; i < decodedArr.length; i++) {
    
  }
  let decodedStr = decodedArr.toString().replaceAll(",", "")
  return decodedStr
};

// Do not edit below this line .replaceAll("1", ",").replaceAll("%", " ").replaceAll("\\", "B").replaceAll("&", "!")
module.exports = caesar;
