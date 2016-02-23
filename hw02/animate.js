//Winton Yee
//Period 3 SoftDev
//February 10, 2016
//HW 2

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//ctx.beginPath();
//ctx.arc(300,300,100,0,2*Math.PI);
//ctx.fill();
//ctx.endPath();

var clear = function clear() {
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0,0,600,600);
}

var radius = 100;
var growing = true;

var drawCircle = function drawCircle() {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(300,300,radius,0,2*Math.PI);
    ctx.fill();
    ctx.endPath();
}

var animation = function animation() {
    if (growing) {
	radius = radius + 1;
    } else {
	radius = radius - 1;
    }
    if (radius >= 200) {
	growing = false;
    }
    if (radius <= 0) {
	growing = true;
    }
    clear();
    drawCircle();
    window.requestAnimationFrame(animation);
}

document.getElementById("start").addEventListener("click", animation);
