var h = 0;
var m = 0;
var s = 0;
function timer(){
document.getElementById("div_id").innerHTML = +h+":"+m+":"+s;
s=s+1;
if( s == 60){
m=m+1;    
s=0;
}
if(m == 60){
h=h+1;    
m=0;
}
}
function start(){
document.getElementById("div_id").innerHTML = +h+":"+m+":"+s;
 time= setInterval(timer,1);
}
function stop(){
 document.getElementById("div_id").innerHTML = +h+":"+m+":"+s;
 time= clearInterval(time);
}
function reset(){
 document.getElementById("div_id").innerHTML = "0:0:0"
 h = 0;
 m = 0;
 s = 0;
}
var h = 0;
var m = 0;
var s = 0;
/* مین شده */
// function timer(){documentgetelementbyiddiv_idinnerhtml:+h+:+m+:+s;s:s+1;ifs:= 60){ m=m+1;s:0}if(m == 60){h:h+1;m:0}function start(){documentgetelementbyiddiv_idinnerhtml:+h+:+m+:+s;time:setInterval(timer,1)}function stop(){documentgetelementbyiddiv_idinnerhtml:+h+:+m+:+s;time:clearInterval(time)}function reset(){documentgetelementbyiddiv_idinnerhtml:0:0:0 h = 0;m:0;s:0}