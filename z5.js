
function Dates(Date1, Date2){
var diffMs = Math.abs(Date1 - Date2);
var diffSecs = Math.round(diffMs/1000);
var diffDays = Math.round(diffSecs/86400);
var diffWeeks = Math.round(diffDays/7);
console.log(diffDays + " days, " + diffSecs + " secs, " + diffWeeks + " weeks");
}

var Date1 = new Date("December 9, 2021 03:23:00");
var Date2 = new Date("December 17, 2021 03:24:00");
Dates(Date1, Date2);
