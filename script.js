var temperature = document.getElementById("temp");
var units = document.getElementById("temp_diff");
var result = document.getElementById("result");

var convert = function() {
  var value = temperature.value;
  var unit = units.value;

  if (unit === "cel") {
    result.textContent = value + "°C";
  } else if (unit === "fah") {
    result.textContent = (value * 9 / 5) + 32 + "°F";
  } else if (unit === "kel") {
    result.textContent = value + "°K";
  }
};

temperature.addEventListener("input", convert);
units.addEventListener("change", convert);