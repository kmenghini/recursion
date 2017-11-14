// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, currentNode) {
  var elementsInClass = [];
  currentNode = currentNode || document.body;
  if (currentNode.classList && currentNode.classList.contains(className)) {
    elementsInClass.push(currentNode);
  }
  if (currentNode.childNodes) {
    for (var i = 0; i < currentNode.childNodes.length; i++) {
      elementsInClass = elementsInClass.concat(getElementsByClassName(className, currentNode.childNodes[i]));
    } 
  } 
  return elementsInClass;
};