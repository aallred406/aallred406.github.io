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
      if (town[i].name == "Preston"){
      let article = document.getElementById("events");
      let para1 = document.createElement("ul");

      for (let a = 0; a < town[i].events.length; a++) {
        let listItem = document.createElement("li");
        listItem.textContent = town[i].events[a];
        para1.appendChild(listItem);
      }
      
      //para1.textContent = "Events: " + town[i].events;

      article.appendChild(para1);
                 
      }
    }
  }
