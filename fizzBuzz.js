//fizzBuzz.js

function fizzBuzz(end) {
	
	for(var i = 0; i <= end; i++) {
		var count = "";
		if(i % 15 ===0 ) {
			count += "FIZZBUZZ"
		}	
		else if (i % 3 === 0) {
			count += "Fizz";
		}
		else if (i % 5 === 0) {
			count += "Buzz";
		}
		console.log(count || i);
	};
	
	
}
fizzBuzz(100);

//fizzBuzz function decleration using if if as a &&.