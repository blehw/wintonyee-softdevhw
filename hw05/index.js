var states = ["Iowa","N.H.","Nev.","S.C.","Ala.","Ark.","Colo.","Ga","Mass.","Minn.","Okla.","Tenn.","Tex.","Vt.","Va.","A. Samoa","Kan.","La.","Neb.","Me.","Mich.","Miss.","Northern Mariana Islands","Fla.","Ill.","Mo.","N.C.","Ohio"];

var clinton = [23,9,20,39,44,22,28,73,46,31,17,44,147,0,62,4,9,37,10,9,60,30,4,133,68,32,32,59,79];

d3.select(".clinton")
.selectAll("div")
.data(clinton)
.enter().append("div")
.style("width",function(d) {return d * 3 + "px";})
.text(function(d) {return d;});

/*
d3.select(".clinton")
.selectAll("div")
.each()
.data(states)
.enter().append("div")
.text(function(d) {return d;});
*/

var sanders = [21,15,15,14,9,10,38,29,45,46,21,23,75,16,33,2,24,14,15,16,67,4,2,65,67,32,45,62];

d3.select(".sanders")
.selectAll("div")
.data(sanders)
.enter().append("div")
.style("width",function(d) {return d * 3 + "px";})
.text(function(d) {return d;});

var unassigned = [85,27,37,20,34,118,96,18,291,70,31,118,210,33,92,12,37,61,74,12,67,546,27,142,43,23,25,45];

d3.select(".unassigned")
.selectAll("div")
.data(unassigned)
.enter().append("div")
.style("width",function(d) {return d * 3 + "px";})
.text(function(d) {return d;});