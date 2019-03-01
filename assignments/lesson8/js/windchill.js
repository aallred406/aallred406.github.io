  let tempF = parseFloat(document.getElementById("tempF").innerHTML);
  let speed = parseFloat(document.getElementById("wind").innerHTML);
  let factor = ((35.74 + 0.6215 * tempF) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16))).toFixed(2);  
  document.getElementById("windchill").innerHTML = factor + "&deg;";

