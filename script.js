function convertTemperature() {
  var input = document.getElementById("input").value;
  var unit = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");

  if (isNaN(input)) {
    resultElement.innerHTML = "Invalid input";
    return;
  }

  var convertedTemperature;
  var resultText;

  if (unit === "celsius") {
    convertedTemperature = (input * 9 / 5) + 32;
    resultText = input + " °C = " + convertedTemperature + " °F";
  } else if (unit === "fahrenheit") {
    convertedTemperature = (input - 32) * 5 / 9;
    resultText = input + " °F = " + convertedTemperature + " °C";
  } else if (unit === "kelvin") {
    convertedTemperature = parseFloat(input) - 273.15;
    resultText = input + " K = " + convertedTemperature + " °C";
  }

  resultElement.innerHTML = resultText;
}
