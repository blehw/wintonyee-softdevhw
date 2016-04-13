var candidates = ["Hillary Clinton","Ted Cruz","Bernie Sanders","Marco Rubio","Ben Carson","Donald J. Trump","John Kasich","Jeb Bush","Scott Walker","Carly Fiorina","Chris Christie","Rand Paul","Rick Perry","Bobby Jindal","Lindsey Graham","Mike Huckabee","Martin O'Malley","George Pataki","Rick Santorum","Lawrence Lessig","Jim Webb","Lincoln Chafee","Jim Gilmore"]

var money = [188.0,104.2,96.3,84.6,68.0,27.3,27.3,157.6,39.5,26.0,26.0,20.6,16.7,11.0,10.0,8.8,7.1,2.1,2.0,1.2,0.8,0.4,0.2]

d3.select(".money")
.selectAll("div")
.data(candidates).
text(function(d) {return d;});

/*.data(money)
.enter().append("div")
.style("width",function(d) {return d * 3 + "px";})
.text(function(d) {return d;});*/