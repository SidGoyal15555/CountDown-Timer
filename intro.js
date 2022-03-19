const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secsE1 = document.getElementById('secs');

const bday = "22 May 2022";

function countdown(){

    const bdayDate = new Date(bday);
    const currentdate = new Date();
    const seconds = (bdayDate - currentdate)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const mins = Math.floor(seconds/60)%60;
    const secs = Math.floor(seconds%60);
    console.log(days,hours,mins,secs);
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formattime(hours);
    minsE1.innerHTML = formattime(mins);
    secsE1.innerHTML = formattime(secs);
}
function formattime(time){
    return time < 10 ? `0${time}` : time;
};
countdown();
setInterval(countdown,1000);