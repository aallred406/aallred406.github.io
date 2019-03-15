let forecastRequest = new XMLHttpRequest();
let URLrequest = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=be03b0c014037eb9f061306615b7eb28";
forecastRequest.open("GET", URLrequest, true);
forecastRequest.responseType = "text";
forecastRequest.send();
forecastRequest.onload = function () {
  let forecast = JSON.parse(forecastRequest.responseText);
  //remove after testing complete
  console.log(forecast);
  let highTemp = [];
  let day = 1;
  let icon = "http://openweathermap.org/img/w/" + forecast.weather[0].icon + "png";
  let desc = forecast.weather[0].description;

  for (let i = 0; i < forecast.list.length; i++) {
    if (list.dt_txt.includes("18:00:00")) {
      highTemp[day] = forecast.main.temp;
      document.getElementById("forecast" + i).innerHTML = highTemp[i] + "&deg; F";
      document.getElementById("cc-img").setAttribute("src", icon);
      document.getElementById("cc-img").setAttribute("alt", desc);
    }
  }
}