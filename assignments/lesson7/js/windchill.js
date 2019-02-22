//Input: Read temperature and wind speed provided by user
//Processing: Calculate wind chill
//Output: Display wind chill in a div

//Read input and convert to number, call funciton windChill
           
//function doInputOutput(){
  //var tempF = parseFloat(document.getElementById("inputTemp").value);
  //var speed = parseInt(document.getElementById("inputWind").value); 
  //var factor = windChill(tempF, speed);

//Display wind chill in degrees F 
  //document.getElementById("output").innerHTML = factor;
//}

//Calculate wind chill
//function windChill(tempF, speed){
  let tempF = parseFloat(document.getElementById("tempF").innerHTML);
  let speed = parseFloat(document.getElementById("wind").innerHTML);
  let factor = ((35.74 + 0.6215 * tempF) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF * Math.pow(speed,0.16))).toFixed(2);  
  document.getElementById("windchill").innerHTML = factor + "&deg;";
//}
