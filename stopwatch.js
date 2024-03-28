var seconds=0;
var minutes=0;
var hours=0;
var setId;
function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    var hr=hours<10?"0"+hours:hours;
    var mi=minutes<10?"0"+minutes:minutes;
    var sec=seconds<10?"0"+seconds:seconds;

    document.getElementById("displaytime").innerHTML=hr+":"+mi+":"+sec;
}
function start(){
    setId=setInterval(stopwatch,1000);
}
function stop(){
    clearInterval(setId);
}
function reset(){
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("displaytime").innerHTML="00:00:00";
}