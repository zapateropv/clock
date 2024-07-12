function clock (){

let date = new Date;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]


let day = weekday[date.getDay()];
let month = months[date.getMonth()]
let year = date.getFullYear()


let hours = date.getHours().toString().padStart(2,0);
let meridian = hours >= 12 ? "PM" : "AM"


hours = hours % 12 || 12;



let minutes = date.getMinutes().toString().padStart(2,0);
let second = date.getSeconds().toString().padStart(2,0);



let time = `${hours}:${minutes}:${second}`
document.querySelector(".clock").textContent = time +  " " + meridian
document.querySelector(".day").textContent = day + ", " + month + " " + year


}


setInterval(clock,  10)
clock()