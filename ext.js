// // LEAP YR DETECTOR
// while (yr != "exit"){
//   var yr = prompt ("enter the year");
//     if ((yr % 4 == 0 ) && (yr % 100 != 0)){
//         alert (yr + " is a leap year");
//     }
//     else {
//         alert(yr + " is not a leap year");
//     } 
// }
// //DEATH PREDICTOR
// var yob = parseInt(prompt("year of birth?"));
// alert ("you ll die at "+ (yob+80));
function Utility(){
var currentDate = new Date();
var monthIndex = currentDate.getMonth();
Var monthsArray = ["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]
return monthsArray[monthIndex];
}
var Utility = new Utility();
