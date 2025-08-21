  const hour = document.querySelector("#hour");
  const minute =document.querySelector("#minute");
  const second = document.querySelector("#second");
let startWatch;
let count = 0;
function startFnc(){
count++;
   startWatch = setInterval(function(){
if(count  > 9){
  second.innerHTML = count++
}
else{
  second.innerHTML = "0" + count++
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
