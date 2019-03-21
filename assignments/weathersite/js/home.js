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
    
    for (var i = 0; i < town.length; i++) {
      if (town[i].name == "Preston" || town[i].name == "Soda Springs" || town[i].name == "Fish Haven"){
      let article = document.getElementById(town[i].name);
      let myH2 = document.createElement("h2");
      let para1 = document.createElement("p");
      let para2 = document.createElement("p");
      let para3 = document.createElement("p");
      let para4 = document.createElement("p");

      myH2.textContent = town[i].name;
      para1.textContent = "Motto: " + town[i].motto;
      para2.textContent = "Year Founded: " + town[i].yearFounded;
      para3.textContent = "Population: " + town[i].currentPopulation;
      para4.textContent = "Annual Rain Fall: " + town[i].averageRainfall + " inches";

      article.appendChild(myH2);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(para3);
      article.appendChild(para4);

      
      }
    }
  }

  function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
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

