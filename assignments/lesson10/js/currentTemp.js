let weatherRequest = new XMLHttpRequest();
let apiURLstring = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=810cde3d5910ebc0f4140c902d4ec7ff";
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
}