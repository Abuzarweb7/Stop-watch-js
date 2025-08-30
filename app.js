
let hours = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let satrtWatch;

let sec = 0;
let min = 0;
let hour = 0;
function startFnc(){
satrt=setInterval (function(){
    sec++
if(sec === 60){
sec = 0;
min++

}
if(min === 60){
min = 0;
hour++
}
if(sec < 10){
second.innerHTML = "0"  +  sec;
} else{
    second.innerHTML = sec;
}

 
if(min < 10){
minute.innerHTML = "0" +  min;

} else{
minute.innerHTML = min;
}
if(hour < 10){
hour.innerHTML = "0" +  hour;
} else{
    hours.innerHTML = hour;
}
},1000)
}






function stopFnc(){
clearInterval (satrtWatch)
console.log("stop watch");

}
function resetFnc(){
    clearInterval(satrtWatch);
    sec = 0;
    min = 0;
    hour = 0;
}