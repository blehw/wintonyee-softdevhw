//Winton Yee
//Period 3 SoftDev
//February 23, 2016
//HW 2

//Set up the canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//Set initial radius size
var radius = 100;

//Set it so that our circle grows when the button is first presssed 
var growing = true;

//Outlines the canvas
ctx.rect(0,0,600,600);
ctx.stroke();

//Clears the canvas
var clear = function clear() {
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0,0,600,600);
}

var animation = function animation() {
    //If our growing variable is true, increase the radius by one. Else, decrease it by 1
    if (growing) {
	radius = radius + 1;
    } 
    if (!growing) {
	radius = radius - 1;
    }
    //If our circle reaches the size of the canvas, make it shrink. If our circle's radius becomes 0, make it grow.
    if (radius >=300) {
	growing = false;
    }
    if (radius <=0) {
	growing = true;
    }
    //Clear canvas so there are no overlapping circles
    clear();
    //Draws our border
    ctx.rect(0,0,600,600);
    ctx.stroke();
    //Sets fill color to black (after clear set it to white)
    ctx.fillStyle = "#000000";
    //Draws and fills our circle
    ctx.beginPath();
    ctx.arc(300,300,radius,0,2*Math.PI);
    ctx.fill();
    //Animates
    requestID = window.requestAnimationFrame(animation);
};

var stop = function stop() {
    //Draws our canvas border
    ctx.rect(0,0,600,600);
    ctx.stroke();
    //Cancels the animation
    window.cancelAnimationFrame(requestID);
};

//Creates our DVD logo
var logo = new Image();
logo.src = "logo_dvd.jpg";

//Initial coords of the logo
var x = 300;
var y = 300;

//Initial direction the logo moves in
var deltax = true;
var deltay = true;

var screensaver = function screensaver() {
    //Clears screen, draws border
    clear();
    ctx.rect(0,0,600,600);
    ctx.stroke();

    //Draws image
    ctx.drawImage(logo,x,y,100,70);

    //If deltax is true, increase x coord by 1. Else, decrease it by 1.
    if (deltax) {
	x = x + 1;
    } else {
	x = x - 1;
    }
    //If deltay is true, increase y coord by 1. Else, decrease it by 1.
    if (deltay) {
	y = y + 1;
    } else {
	y = y - 1;
    }
    //If our logo reaches the x border, make it move in the other x direction.
    if (x >= 500) {
	deltax = false;
    }
    if (x <= 0) {
	deltax = true;
    }
    //If our logo reaches the y border, make it move in the other y direction.
    if (y >= 530) {
	deltay = false;
    }
    if (y <= 0) {
	deltay = true;
    }
    //Animate
    window.requestAnimationFrame(screensaver);
};

//Buttons to start and stop animations
document.getElementById("start").addEventListener("click", animation);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("DVD").addEventListener("click", screensaver);
