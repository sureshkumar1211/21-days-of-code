//write a function called fizzbuzz which takes number as an argument.
//it console logs from 1 to n if n multiples 3 print "fizz"
// if n multiples 5 print "buzz"
// if n multiples botn 3 and 5 print "fizzbuzz"

const fizzBuzz = n => {
	for (let i = 1; i <= n; i++) {
		switch (true) {
			case i % 3 == 0 && i % 5 == 0:
				console.log("fizzbuzz");
				break;
			case i % 3 == 0:
				console.log("fizz");
				break;
			case i % 5 == 0:
				console.log("buzz");
				break;
			default:
				console.log(i);
		}
	}
};
fizzBuzz(15);
