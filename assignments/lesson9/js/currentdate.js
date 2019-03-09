/*Friday, 15 February 2019
function currentDate(){
let today = new Date();
//let day = today.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = today.getDate();
let year = today.getFullYear();
//let month = today.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//convert to text
document.getElementById('currentdate').innerHTML = days[today.getDay] + date + months[today.getMonth] + year;
}*/

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
