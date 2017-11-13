// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

  //initalize array to add to
var elementsInClass = [];

var getElementsByClassName = function(className
) {
  //initialize current node to document.body
  var currentNode = document.body;
  //loop into each node
  if (currentNode.classList.contains(className)) {
  	elementsInClass.push(currentNode);
  	//loop through each child node and send through recursive func ***
  	getElementsByClassName(currentNode.childNodes);
  }
  //if the classList inclues the className
  	//push the element to the array
  	//go into next childNode
  return elementsInClass;
};
