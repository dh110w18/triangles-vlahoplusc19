//Part 1: Area of a Triangle//
var b= 30
var h= 40
var area= (b*h)/2
var result= "A Triangle with a Base of "+b+" and a Height of "+h+" would have an area of: "+area;
document.getElementById("first").innerHTML = result;

//Part 2: Hypotenuse of a Triangle//
function calcHypotenuse(b,h) {
  var hypot = Math.sqrt((b*b)+(h*h));
  return hypot;
}
var printHypot = calcHypotenuse(b,h);
var resultHypot = "To Calculate the Hypotenuse of a Triangle with a Base of "+b+" and a Height of "+h+", square each side, sum them up and then take the Square Root of the Sum. The Hypotenuse for this Triangle would be: "+printHypot;
document.getElementById("second").innerHTML = resultHypot;

//Part 3: Triangle Object//
var triangle = {
  base: 30,
  height: 40,
  canvasId: "canvas",
  calcHypotenuse: function() {
    return Math.sqrt((this.base*this.base)+(this.height*this.height));   
  },
  calcArea: function() {
    return (this.base*this.height)/2;
  },
  drawIt: function () {
    drawTriangle(this.base, this.height, this.canvasId);
  },
};

var resultArea = "A Triangle with a Base of "+triangle.base+" and a Height of "+triangle.height+" would have an area of: "+triangle.calcArea();
var resultHypo = "The Hypotenuse of a Triangle with a Base of "+triangle.base+" and a Height of "+triangle.height+" would be: "+triangle.calcHypotenuse();

document.getElementById("third").innerHTML = resultArea+"<br>"+resultHypo;

var final_triangle = triangle.drawIt();
