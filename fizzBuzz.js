//fizzBuzz.js

function fizzBuzz(start, end) {
	
	for(var i = start ; i <= end; i++) {
		var count = "";
		if (i % 3 === 0) {
			count += "Fizz";
		}
		if (i % 5 === 0) {
			count += "Buzz";
		}
		console.log(count || i);
	};
	
	
}
fizzBuzz(1,100);

//fizzBuzz function decleration using if if as a &&.