let timer;//variable to hold the timer
let isrunning=false;//flag to indicate if the timer is running
let starttime;//variable to hold the start time
function startstop(){
    if (isrunning) {
        // Stop the timer
        clearInterval(timer);
        isrunning = false;
        document.getElementById("startStopButton").textContent = "Start!";
}else{
    //start the timer
    starttime=new Date().getTime();//get current time in milliseconds since 1
    timer=setInterval(updateDisplay,1000);
    isrunning=true;
    document.getElementById("startStopButton").textContent = "Stop!";

}}

function updateDisplay(){
    let currenttime=new Date().getTime();
    let elapsedtime=currenttime-starttime;//calculate the elapsed time
    let hours=Math.floor(elapsedtime/(1000*60*60));//hours are calculated by dividing
    let minutes=Math.floor((elapsedtime%(1000*60*60))/(1000*60));//remaining time after subtracting
    let seconds=Math.floor((elapsedtime%(1000*60))/1000);//update display with elapsed time
    document.getElementById("display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);//add leading zeros for single digit values

}
function formatTime(time){
return time<10?"0"+time:time;
}

function reset(){
    clearInterval(timer);
    isrunning=false;
    document.getElementById("display").textContent="00:00:00";
}