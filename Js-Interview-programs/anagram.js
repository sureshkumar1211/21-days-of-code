// write a function called anagram
// which takes two strings as an arg
//if the second is anagram of the first return true, or else return false

const removeSpecialCharsAndMakeLC = str => str.replace(/[^\w]/g, "").toLowerCase();

const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;

	let charCount = {},
		string1 = removeSpecialCharsAndMakeLC(str1),
		string2 = removeSpecialCharsAndMakeLC(str2);

	for (let char of string1) {
		charCount[char] = ++charCount[char] || 1;
	}

	for (let char of string2) {
		if (!charCount[char]) return false;
	}

	return true;
};

console.log(validAnagram("Cinema", "Iceman"));
