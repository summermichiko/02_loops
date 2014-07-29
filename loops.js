var repeat = function(yo, number) {
	var myArray = [];
	for(var x=0; x<number; x++) {
	    myArray.push("yo"); 
	}

	var string = myArray.join("");
	return string; 
};


var join = function(array, delimiter){
	var finalString = "";
	if(typeof delimiter === "undefined"){ //if you add delimiter as an argument, it automatically becomes undefined
		delimiter = ""; 
	}
	for(var i = 0; i < array.length; i++){
		finalString += array[i];
		if(i !== array.length - 1) {
			finalString += delimiter;
		}
	}
	return finalString;
};


var sum = function(newArray) {
    var total = 0;
	for(var i=0; i<newArray.length; i++) {
		total += newArray[i];
	}
    return total;
};


function paramify(myObject){
	var result = [];
	for(thing in myObject) {
		if(myObject.hasOwnProperty(thing)) {
			result.push(thing + "=" + myObject(thing));
		}
	}
	result.sort();
	string = result.join("&");
	return string;
};


var factorial = function(n) {
  if (n <= 1) {
      return 1;
  } else {
    var final = n * factorial(n-1);
  	return final;
  }
};


var concat_string = function() {
	return join(arguments, ""); //arguments is built-in and is available in every function
};




// function test() { **can declare test(n) above this line (order doesn't matter)
// }; 
// vs.
// var test = function() { **best practice (order does matter)
// };






























