//Winton Yee
//Period 3 SoftDev
//February 10, 2016
//HW 2

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var radius = 100;
var growing = true;

var clear = function clear() {
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0,0,600,600);
}

function animation() {
    if (growing) {
	radius = radius + 1;
    } 
    if (!growing) {
	radius = radius - 1;
    }
    if (radius >=300) {
	growing = false;
    }
    if (radius <=0) {
	growing = true;
    }
    clear();
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(300,300,radius,0,2*Math.PI);
    ctx.fill();
    window.requestAnimationFrame(animation);
};

document.getElementById("start").addEventListener("click", animation);
