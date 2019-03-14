let weatherRequest = new XMLHttpRequest();
let apiURLstring = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=810cde3d5910ebc0f4140c902d4ec7ff";
weatherRequest.open("GET", apiURLstring, true);
weatherRequest.responseType = "text";
weatherRequest.send();
weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
  document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
}
