//Appending and Prepending to an array in ES5
var arrayES5 = ['a', 'b', 'c', 'd'];
arrayES5.unshift('start');
arrayES5.push('end');
console.log(arrayES5); //Output: ['start', 'a', 'b', 'c', 'd', 'end']

//Appending and Prepending to an array in ES6
var arrayES6 = ['a', 'b', 'c', 'd'];
arrayES6 = ['start', ...arrayES6];
arrayES6 = [...arrayES6', 'end'];
console.log(arrayES6); //Returns ['start', 'a', 'b', 'c', 'd', 'end']
arrayES6 = ['start', ...arrayES6, 'end']; //To both steps in 1 line of code


//How to create a private variable in JavaScript?
//Create a local variable that only lives within the scope of a function
function secretVariable() {
	var private = "super secret code";
	return function() {
		return private
	}
}
var getPrivateVariable = secretVariable();
console.log(getPrivateVariable()); //Output: super secret code
console.log(secretVariable()); //Output: f() { return private; }


// Immediately Invoked Function Expression (IIFE)
(favNumber = function (num=3) {
	console.log("My favourite number is: " + num);
})(); //This last pair of brackets means the function is called immediately.
favNumber(5);


//Using the typeof operator
console.log(typeof typeof 1); //Output: string
  //typeof 1 = number
  //typeof (typeof 1) = typeof(number) = string
