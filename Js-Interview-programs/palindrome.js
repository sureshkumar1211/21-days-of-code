//Write a function called palindrome which takes string as an argument. If the given string is palindrome return true, or else return false

const palindrome = str =>
	str
		.split("")
		.reverse()
		.join("") == str
		? true
		: false;
console.log(palindrome("mom"));
