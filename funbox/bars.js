var data = [1,2,3,4];

var f = d3.scale.linear()
.domain([0,d3.max(data)])
.range([0,500]);

d3.select(".chart")
.selectAll("div")
.data(data)
.enter().append("div")
.style("width",function(d) {return f(d) + "px";})
.text(function(d) {return d;});
