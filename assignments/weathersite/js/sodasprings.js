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

let forecastRequest = new XMLHttpRequest();
let URLrequest = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=be03b0c014037eb9f061306615b7eb28";
forecastRequest.open("GET", URLrequest, true);
forecastRequest.responseType = "text";
forecastRequest.send();
forecastRequest.onload = function () {
  let forecast = JSON.parse(forecastRequest.responseText);
  let highTemp = [];
  let day = 1;
  let weekday = [];
  var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

  for (let i = 0; i < forecast.list.length && day < 6; i++) {
    if (forecast.list[i].dt_txt.includes("18:00:00")) {
      highTemp[i] = forecast.list[i].main.temp;
      let icon = "https://openweathermap.org/img/w/" + forecast.list[i].weather[0].icon + ".png";
      let desc = forecast.list[i].weather[0].description;
      let now = new Date(forecast.list[i].dt_txt);
      weekday = days[now.getDay()];
      document.getElementById("day" + day).innerHTML = weekday;
      document.getElementById("forecast" + day).innerHTML = highTemp[i] + "&deg; F";
      document.getElementById("ccimg" + day).setAttribute("src", icon);
      document.getElementById("ccimg" + day).setAttribute("alt", desc);
      day++;
    }
  }
}

let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  let towndata = request.response;
  showData(towndata);
}
function showData(jsonObj) {
  let town = jsonObj["towns"];

  for (let i = 0; i < town.length; i++) {
    if (town[i].name == "Soda Springs") {
      let article = document.getElementById("events");
      let para1 = document.createElement("ul");

      for (let a = 0; a < town[i].events.length; a++) {
        let listItem = document.createElement("li");
        listItem.textContent = town[i].events[a];
        para1.appendChild(listItem);
      }

      article.appendChild(para1);

    }
  }
}

var now = new Date();
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
}
today =  days[now.getDay()] + ", " +
         date + " " +
         months[now.getMonth()] + " " +
         (fourdigits(now.getYear())) ;
document.getElementById("currentdate").innerHTML = today;

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}