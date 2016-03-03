/*
Winton Yee
SoftDev2 pd3
HW04 - SVG
2016--03--02
*/

//gets our background
var pic = document.getElementById("vimage");

//setting up variables for animation
var radius = 100;
var growing = true;

var animation = function() {
    //same animation math as before
    //if we're growing, add 1 to radius
    if (growing) {
	radius = radius + 1;
    } 
    //if we're not growing, subtract 1 from radius
    if (!growing) {
	radius = radius - 1;
    }
    //if our radius reaches 250, make it shrink
    if (radius >=250) {
	growing = false;
    }
    //if our radius reaches 0, make it grow
    if (radius <=0) {
	growing = true;
    }
    //create our svg element
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    //set our svg attributes
    c.setAttribute("cx","250");
    c.setAttribute("cy","250");
    c.setAttribute("r",radius.toString());
    //append our svg element
    pic.appendChild(c)
    //for some reason, when I add pic.clear before everything, which worked with the canvas for animation, svg doesn't end up animating at all. However, now, I can't make the circle shrink.
    //pic.clear();
};

//Creates our DVD logo
var logo = new Image();
logo.src = "logo_dvd.jpg";

//Initial coords of the logo
var x = 100;
var y = 100;

//Initial direction the logo moves in
var deltax = true;
var deltay = true;

var screensaver = function() {
    //pic.removeChild(document.getElementByTagName("circle")[0]);
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
    var s = document.createElementNS("http://www.w3.org/2000/svg","circle");
    //can't figure out this logo thing; decided to go for the circle instead
    //s.setAttribute("xlink:href","logo_dvd.jpg");
    s.setAttribute("cx",x.toString());
    s.setAttribute("cy",y.toString());
    s.setAttribute("r","50");
    //s.setAttribute("height","50px");
    //s.setAttribute("width","100px");
    pic.appendChild(s);
    //again, pic.clear is acting wonky, so we getting a circle with a slime trail
    //pic.clear();
    
};

//and...i can't figure out how to put setInterval in  buttons
window.setInterval(animation,16);
window.setInterval(screensaver,16)
