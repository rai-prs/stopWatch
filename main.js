let display = document.getElementById("display");
let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milli = 0;

let newHours = 0;
let newMinutes = 0;
let newSeconds = 0;

let status = "stop"
let interval;

function stopWatch(){
  milli++;
  if(milli / 10 == 1){
    seconds++;
    milli = 0;
  } else if(seconds / 60 == 1){
      minutes++;
      seconds = 0;
    } else if(minutes / 60 == 1){
      hours++;
      minutes = 0;
    }
  if(seconds < 10){
    newSeconds = "0" + seconds;
  }else{
    newSeconds = seconds;
  }
  if(minutes < 10){
    newMinutes = "0" + minutes;
  }else{
    newMinutes = minutes;
  }
  if(hours < 10){
    newHours = "0" + hours;
  }else{
    newHours = hours;
  }
  
  
  display.innerHTML = newHours + ":" + newMinutes + ":" + newSeconds + ":" + milli
}

startStop.addEventListener("mousedown",function(){
  if(status == "stop"){
    interval = setInterval(stopWatch,100);
    startStop.innerHTML = "STOP";
    status = "start";
  }else{
    clearInterval(interval);
    startStop.innerHTML = "START";
    status = "stop";
  }
});

reset.addEventListener("mousedown",function(){
  clearInterval(interval);
  startStop.innerHTML = "START";
  status = "stop";
  display.innerHTML = "00:00:00:0";
  hours = 0;
  minutes = 0;
  seconds = 0;
  milli = 0;
});