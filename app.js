  const hour = document.querySelector("#hour");
  const minute =document.querySelector("#minute");
  const second = document.querySelector("#second");

function startFnc(){
 let count = 0
  setInterval(function(){
  
   
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
clearInterval(setInterval);
}