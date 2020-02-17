//Write a function which takes str as an argument which returns strings characters as capitalize

const capitalize = str => {
	let strArray = [];
	let splitStr = str.split(" ");
	splitStr.forEach(word => strArray.push(word[0].toUpperCase().concat(word.slice(1))));
	return strArray.join(" ");
};

console.log(capitalize("welcome to our home!!"));
