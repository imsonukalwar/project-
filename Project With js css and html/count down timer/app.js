
setInterval(()=>{
const crrtime=new Date();
console.log(crrtime);

const olympicdate=new Date(2028,6,14).getTime();
console.log(olympicdate);
let timer=olympicdate-crrtime;

const day=Math.floor((timer)/(100*60*60*24));
timer%=100*60*60*24;
const houre=Math.floor((timer)/(100*60*60));
timer%=100*60*60;
const minute=Math.floor((timer)/(100*60));
timer%=100*60;
const second=Math.floor((timer)/(100));
timer%=100;

const div=document.querySelector('div')

div.textContent=` ${day}:day ${houre}: houre ${minute}:minute ${second}:second`
},1000);

