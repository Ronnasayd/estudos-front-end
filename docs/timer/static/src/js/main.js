var timer_counter = document.querySelector('#timer-counter');
var timer_text = document.querySelector(".timer-text h1");
var radios = parseFloat(timer_counter.getAttribute("r"));
var area = 2*Math.PI*radios;

timer_counter.setAttribute("stroke-dasharray",area);
timer_counter.setAttribute("stroke-dashoffset",area);


var maximum_time = 1*60;
var seconds = 0;
var minutes = 0;

addZero = function(number){
    number = String(number);
    if(number.length == 1){
        return "0" + number;
    }
    else{
        return number;
    }
    return null;
};

increaseSeconds = function(){

    if(minutes >= 60){
        minutes = 0;
    }

    if(seconds >= maximum_time){
        seconds = 0;
    }
    if(seconds%59==0 && seconds > 0){
        minutes += 1;
    }
    seconds += 1;
    var spent_time = area*(1 - seconds/maximum_time);

    
    timer_text.textContent = addZero(minutes)+":"+addZero(seconds%60);
    timer_counter.setAttribute("stroke-dashoffset",spent_time);
};

setInterval(increaseSeconds,1000);

