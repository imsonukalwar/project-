

setInterval(()=>{
const div=document.querySelector('div');
const t=new Date();
div.textContent=t.toLocaleTimeString();
},1000);


//`setInterval()` is a JavaScript timer function that repeatedly executes a function at fixed time intervals.
//➡️ `setInterval()` = “Run this function repeatedly after a fixed interval of time.”
