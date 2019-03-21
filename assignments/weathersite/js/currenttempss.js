let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=810cde3d5910ebc0f4140c902d4ec7ff";
weatherRequest.open("GET", apiURLstring, true);
weatherRequest.responseType = "text";
weatherRequest.send();
weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  //for testing
  //console.log(weatherData);
  document.getElementById("tempF").innerHTML = weatherData.main.temp + "&deg; F";
  document.getElementById("high").innerHTML = weatherData.main.temp_max + "&deg; F";
  document.getElementById("wind").innerHTML = weatherData.wind.speed + "mph";
  document.getElementById("humid").innerHTML = weatherData.main.humidity + "%";

  //let tempF = parseFloat(document.getElementById("tempF").innerHTML);
  //let speed = parseFloat(document.getElementById("wind").innerHTML);
  let factor = ((35.74 + 0.6215 * weatherData.main.temp) - (35.75 * Math.pow(weatherData.wind.speed,0.16)) + (0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed,0.16))).toFixed(2);  
  document.getElementById("windchill").innerHTML = factor + "&deg; F";
}