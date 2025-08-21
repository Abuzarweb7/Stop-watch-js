  const hours = document.querySelector("#hour");
  const minute =document.querySelector("#minute");
  const second = document.querySelector("#second");
let startWatch;
let sec = 0;
let min = 0 ;
let hour = 0 ;
function startFnc(){
 
   startWatch = setInterval(function(){
if(sec == 60){
  sec = 0;
  min++;
}
if(min == 60){
  min = 0;
  hour++;
}


 
  },1000)
}
function stopFnc(){
  console.log("stop watch");
clearInterval(startWatch);

}

function resetFnc(){
  console.log("Reset watch");
count = 0;
 

}




