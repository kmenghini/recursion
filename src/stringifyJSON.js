// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//var stringOutput = '';

var stringifyJSON = function(obj) {
  // move from outside data type to inside
  //update input for next iteration
  //add strigified part to output
  //if it's a number
  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return obj.toString();
  } else if (typeof obj === 'string') {
  	return obj;
  } else if (obj === null) {
  	return 'null';
  } else if (Array.isArray(obj)) {
  	return '[' + obj + ']';
  	//loop through each element into Stringify JSON
  } else if (typeof obj === 'object') {
  	return '{' + obj + '}';
  	//loop
  } else if (typeof obj === 'function' || typeof obj === 'undefined') {
  	return;
  }
  
  //also cases for function, undefined, and symbol
  // while(){
  // 	stringifyJSON(obj);		
  // }		
  //return string;	 	
};
