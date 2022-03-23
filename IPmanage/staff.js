function openNav(){
    document.getElementById("mySidenav").style.width = "100%";
  }
function classBar(){
    document.getElementById("mySidenav").style.width = "0px";
}

// get the day of the week
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const newDay = new Date();
let today = weekdays[newDay.getDay()];
document.getElementById("weekday").innerHTML = today;

// getting the month, the day and the year

const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
const newYear = new Date();
let monthName = month[newYear.getMonth()];
document.getElementById("monthYearDay").innerHTML = monthName;

// getting the day

const myDate = new Date()
let todayDate = myDate.getDate();
document.getElementById("monthDay").innerHTML = todayDate + ",";

// getting the year

const myYear = new Date()
let thisYear = myYear.getFullYear();
document.getElementById("monthDayYear").innerHTML = thisYear;

// getting the hours of the day and display it on the screen

function addZero(i) {
  if (i < 10 ) {
    i = "0" + i
  }
  return i;
}

const interval = setInterval(() => {
const todayTime = new Date();
let theHours = addZero(todayTime.getHours());
let theMin = addZero(todayTime.getMinutes());
let theSec = addZero(todayTime.getSeconds());
let time = theHours + ":" + theMin + ":" + theSec;
document.getElementById("timeBar").innerHTML = time;
}, 1000);


// setting to get the Clock out and Clock in of a staff

function change(timeInOut){

  function addZero(i) {
    if (i < 10 ) {
      i = "0" + i
    }
    return i;
  }
  const StaffInTime = new Date();
  let clockInOutHours = addZero(StaffInTime.getHours());
  let clockInOutMin = addZero(StaffInTime.getMinutes());
  let clockInOutSec = addZero(StaffInTime.getSeconds());
  let clockInOutTime = clockInOutHours + ":" + clockInOutMin + ":" + clockInOutSec;

// checking when the user click in the button

 if(timeInOut.value === "Clock In"){
  document.getElementById("clockIn").innerHTML = clockInOutTime;
  timeInOut.value = "Clock Out";
 }
 else{
  document.getElementById("clockOut").innerHTML = clockInOutTime;
  timeInOut.value = "Clock In";
 }
}