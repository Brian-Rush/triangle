//Business Logic

//Function to determine if equilateral
var equilateral = function(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return true;
  } else {
    return false;
  }
}
//Function to determine if isosceles
var isosceles = function(side1, side2, side3) {
  if (side1 === side2 || side2 === side3 || side1 === side3) {
    return true;
  } else {
    return false;
  }
}

//Function to determine if scalene
var scalene = function(side1, side2, side3) {
  if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    return true;
  } else {
    return false;
  }
}

//Function to determine if not a triangle
var notTriangle = function(side1, side2, side3) {
  if ((side1 + side2 < side3) ||
    (side2 + side3 < side1) ||
    (side1 + side3 < side2)) {
      return true;
    } else {
      return false;
    }
}

var evaluateTriangle = function(side1, side2, side3) {
  if (notTriangle(side1, side2, side3)){
    return 'not a triangle';
  } else if (equilateral(side1, side2, side3)) {
    return "equilateral";
  } else if (isosceles(side1, side2, side3)){
    return "isosceles";
  } else if (scalene(side1, side2, side3)){
    return "scalene";
  }
}




//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var side1 = parseFloat($("input[name='input1']").val());
    var side2 = parseFloat($("input[name='input2']").val());
    var side3 = parseFloat($("input[name='input3']").val());

    var triangleType = evaluateTriangle(side1, side2, side3);
    console.log (triangleType);
  });












});
