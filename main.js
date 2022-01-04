var mouseevent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
widthofline=1;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentpositionofx=e.clientX-canvas.offsetLeft;
    currentpositionofy=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.arc(currentpositionofx,currentpositionofy,30,0,2*Math.PI);
    ctx.stroke();

    


}
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;
    
    
}
canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseevent="mouseleave";
}
