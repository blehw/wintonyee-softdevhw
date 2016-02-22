/*Winton Yee
Period 3 SoftDev
February 10, 2016
HW 1a*/

var c = document.getElementById("playground");
var button = document.getElementById("button");
var ctx=c.getContext("2d");
ctx.strokeRect(0,0,1000,1000);

var x;
var y;
var oldX = -1;
var oldY = -1;

function click(e){
    x=e.pageX;
    y=e.pageY;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    if (oldX > 0) {
	ctx.beginPath();
	ctx.moveTo(oldX,oldY);
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.closePath();
    }
    oldX = x;
    oldY = y;

}

function clear(){
    ctx.clearRect(0,0,playground.width,playground.height);
    ctx.strokeRect(0,0,1000,1000);
    oldX = -1
    oldY = -1
}

playground.addEventListener("click",click);
button.addEventListener("click",clear);
