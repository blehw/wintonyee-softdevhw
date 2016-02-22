//Winton Yee
//Period 3 SoftDev
//February 10, 2016
//HW 1b

var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

//Sets the color that we will color in
ctx.fillStyle = "#ff0000";

//Fills a rectange, starting at (a,b) and with dimensions cxd
ctx.fillRect(0,0,100,100);

//Sets the color that we will draw the outline in
ctx.strokeStyle = "00ff00";

//Draws the outline of a rectange, starting at (a,b) and with dimensions cxd
ctx.strokeRect(0,0,100,100);

ctx.fillStyle="#00ff00";
ctx.fillRect(200,0,100,100);
ctx.strokeStyle="#ff0000";
ctx.strokeRect(200,0,100,100);

//Marks the current shape we are drawing
ctx.beginPath();

//Sets the initial point 
ctx.moveTo(190,100);

//Draws a line connecting this point to beginning one
ctx.lineTo(190,200);
ctx.lineTo(100,200);
ctx.fillStyle ="#0000ff";
ctx.fill();
ctx.strokeStyle="#00ff00";
ctx.stroke();

//Closes our shape
ctx.closePath();

ctx.beginPath();

//Draws an arc beginning at (a,b) with radius c. d and e????
ctx.arc(150,300,100,0,200);
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();

//Sets the font and font size
ctx.font = "30px arial"

//Renders text at coordinates (b,c)
ctx.fillText("oh! what a cool webpage",0,450);
