// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var output = '';

  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return output += obj.toString();

  } else if (typeof obj === 'string') {
  	return output += '\"' + obj + '\"';

  } else if (obj === null) {
  	return output += 'null';

  } else if (Array.isArray(obj)) {
  	for (var i = 0; i < obj.length; i++) {
  		output += stringifyJSON(obj[i]) + ',';
  	}
  	return '[' + output.slice(0, -1) + ']'; 

  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (key !== 'functions' && key !== 'undefined'){
      	output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
  	return '{' + output.slice(0, -1) + '}';

  } else if (typeof obj === 'function' || typeof obj === 'undefined') {
  	return output;
  }	
  
};
