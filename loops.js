var repeat = function(string, number) {
	var myArray = [];
	for(var x=0; x<number; x++) {
	    myArray.push("yo"); 
	}
	return myArray.join("");
};


var join = function(array, delimiter){
	var finalString = "";
	if(typeof delimiter === "undefined"){ //if there is no delimeter, it will be undefined 
		delimiter = ""; //if you add delimiter as an argument, it automatically becomes undefined
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
	for(key in myObject) {
		if(myObject.hasOwnProperty(key)) {
			result.push(key + "=" + myObject[key]);
		}							//value of the object
	}
	result.sort(); //puts items of an array in alphabetical order
	string = result.join("&"); //joins elements of an array into a string
	return string;
};


var factorial = function(n) {
	var final = 1;
  if (n <= 1) {
      return final;
  } else {
  	for(i=n; i>1; i--) {
  		final = final * i;
  	}
    //var final = n * factorial(n-1);
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






























