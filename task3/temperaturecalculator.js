function convertTemp() {
  let input = document.getElementById("tempInput").value;
  let tempType = document.getElementById("tempType").value;
  let result = document.getElementById("result");

  if (isNaN(input)) {
    result.innerHTML = "Please enter a valid number!";
    return;
  }

  input = parseFloat(input);

  if (tempType === "Celsius") {
    let fahrenheit = (input * 9/5) + 32;
    let kelvin = input + 273.15;
    result.innerHTML = input + " &#8451; = " + fahrenheit.toFixed(2) + " &#8457; or " + kelvin.toFixed(2) + " K";
  } else if (tempType === "Fahrenheit") {
    let celsius = (input - 32) * 5/9;
    let kelvin = (input + 459.67) * 5/9;
    result.innerHTML = input + " &#8457; = " + celsius.toFixed(2) + " &#8451; or " + kelvin.toFixed(2) + " K";
  } else {
    let celsius = input - 273.15;
    let fahrenheit = (input * 9/5) - 459.67;
    result.innerHTML = input + " K = " + celsius.toFixed(2) + " &#8451; or " + fahrenheit.toFixed(2) + " &#8457;";
  }
}
