//repeat
var repeat = function(yo, number) { //doesn't work with "yo", why?
	var myArray = [];
	for(x=0; x<number; x++) {
	    myArray.push("yo"); 
	}

	var string = myArray.join("");
	return string; 
}

//looping over arrays
// var join = function(myArray, separator) {
//     var preOutput = myArray.toString("");
//     var finalOutput = preOutput.replace(/,/g , separator);
//     console.log(finalOutput);
//     return(finalOutput);
// }

var join = function(array, separator){
	var finalString = "";

	if(typeof separator === "undefined"){
		separator = "";
	}
	// apple/banana/cherry
	for(var i = 0; i < array.length; i ++){
		finalString+= array[i]
		//apple/bananacherry
		if(i !== array.length - 1) {
			finalString += separator;
		}
	}
	return finalString;
}

// var array = ["apple", "banana", "cherry"]; //FIX 9

// array.type = "fruits";
// array.first = function() {
// 	return this[0];
// }

// join(array);

//sum
var sum = function(newArray) {
    var total = 0;
	for(var i=0; i<newArray.length; i++) {
		total = total + newArray[i];
	}
    return total;
};

//looping over hashes
var paramify = function(hash) {
    var word = "";
    var array = [];
    var enuArray = Object.keys(hash) // Array of all enumerable own properties
    for (var i in enuArray) {
        sum = enuArray[i] + "=" + hash[enuArray[i]];
        array.push(sum);
    }
    array = array.sort();
    word = array.join("&");
    return word;
}

//factorial
var factorial = function(n) {
  if (n <= 1) {
      return 1;
  } else {
    var final = n * factorial(n-1);
  	return final;
  }
};


//the arguments array
var concat_string = function() { //FIX 23, 24
	return Array.prototype.slice.call(arguments).join("");

      // var str = arr.join("");
      // // console.log(str);
      // return str;
};



