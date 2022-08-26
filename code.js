const time_el = document.querySelector('#watch');
const start_btn = document.querySelector('#start');
const stop_btn = document.querySelector('#stop');
const reset_btn = document.querySelector('#reset');

var duration = 0;
var interval = null;

start_btn.addEventListener('click', function(){
    interval = setInterval(timer,1);
});
stop_btn.addEventListener('click', function(){
    clearInterval(interval);
    interval = null;
});
reset_btn.addEventListener('click', function(){
    clearInterval(interval);
    interval = null;
    duration = 0;
    time_el.innerHTML ='00:00:00:0';
});

function timer(){
    duration++;
    
    var minutes = Math.floor(duration/3600);
    var seconds = Math.floor((duration-(minutes*3600))/60);
    var miliseconds = duration % 60;




    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    miliseconds = (miliseconds < 10) ? "0" + miliseconds : miliseconds;

    time_el.innerHTML = `${minutes}:${seconds}:${miliseconds}`;   

}

