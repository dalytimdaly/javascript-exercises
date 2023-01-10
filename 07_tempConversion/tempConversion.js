const convertToCelsius = function(farenheitTemp) {
  let firstTemp = farenheitTemp - 32
  let secondTemp = firstTemp * 5
  let celsiusTemp = secondTemp / 9
  if (Number.isInteger(celsiusTemp)) {
    return celsiusTemp
  } else 
    return parseFloat(celsiusTemp.toFixed(1))
};

const convertToFahrenheit = function(celsiusTemp) {
  let firstTemp = celsiusTemp * 9
  let secondTemp = firstTemp / 5
  let farenheitTemp = secondTemp + 32
  if (Number.isInteger(farenheitTemp)) {
    return farenheitTemp
  } else
    return parseFloat(farenheitTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
