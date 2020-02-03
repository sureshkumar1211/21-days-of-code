const selectionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let minVal = i;
		for (let j = i; j < arr.length - 1; j++) {
			minVal = arr[j + 1] <= arr[minVal] ? (minVal = j + 1) : minVal;
		}
		if (minVal === i) break;
		[arr[i], arr[minVal]] = [arr[minVal], arr[i]];
	}
	return arr;
};

console.log(selectionSort([1, 2, 3, 4, 1, 8, 9]));
