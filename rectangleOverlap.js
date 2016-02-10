// Needs improvement
var rectangle1 = {
  'x1': 0,
  'y1': 5,
  'x2': 30,
  'y2': 50
};

var rectangle2 = {
  'x1': 10,
  'y1': 10,
  'x2': 40,
  'y2': 60
};

function doTheyOverlap(rect1, rect2) {
  var result = false;

  // calculate the surface area of each
  var rectOneX = rect1.x1 - rect1.x2;
  var rectOneY = rect1.y1 - rect1.y2;
  var rectOneArea = rectOneX * rectOneY;

  var rectTwoX = rect2.x1 - rect2.x2;
  var rectTwoY = rect2.y1 - rect2.y2;
  var rectTwoArea = rectTwoX * rectTwoY;

  // calculate max surface area
  // that the two rectangles can occupy
  // without overlapping
  var maxX = rectOneX + rectTwoX;
  var maxY = rectOneY + rectTwoY;
  var maxArea = maxX * maxY;

  if (maxArea > (rectOneArea + rectTwoArea)){
    result = true;
  }

  console.log(result);

  return result; 
}

doTheyOverlap(rectangle1, rectangle2);
