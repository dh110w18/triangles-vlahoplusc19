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


//Part 4: User Entered Base and Height//
var userBase = Number(prompt("Please Enter a Numerical Value Greater Than 10 for the Triangle's Base: "))
if (userBase < 10) {
        alert("This Number is Less Than 10, Enter Another Number: ");
        var userBase = Number(prompt("Please Enter a Numerical Value Greater Than 10 for the Triangle's Base: "))
}   else { var base = userBase
}

var userHeight = Number(prompt("Now Enter a Value Greater Than Zero for the Triangle's Height: "))
if (userHeight < 0) {
    alert("This Number is Less Than Zero, Please Enter a Number Greater Than Zero: ");
    var userHeight = Number(prompt("Now Enter a Value Greater Than Zero for the Triangle's Height: "))
}   else { var height = userHeight
}

var userArea = (userBase*userHeight)/2
var userHypot = Math.sqrt((userBase*userBase)+(userHeight*userHeight))

var t_area_result = "The Area of a triangle with a Base of "+userBase+" and a Height of "+userHeight+" would be: "+userArea;
var t_hypot_result = "The Hypotenuse of a triangle with a Base of "+userBase+" and a Height of "+userHeight+" would be: "+userHypot;

document.getElementById("fourth").innerHTML = t_area_result+"<br>"+ t_hypot_result;

var triangle2 = {
    base: userBase,
    height: userHeight,
    canvasId: "canvas2",
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

var draw = triangle2.drawIt();


//Part 5: Lots of Triangles//
document.getElementById("fifth").innerHTML = "Growing Triangles";

for (var i=1; i<=5; i++) {
    var triangle3 = {
        base: 30*i,
        height: 20*i,
        canvasId: "canvas3",
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
    
    var draw = triangle3.drawIt();
    }