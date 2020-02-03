//Bubble sort
const bubbleSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let swap = true;
		for (let j = 0; j < (i > 0 ? arr.length - i : arr.length - 1); j++) {
			if (arr[j + 1] < arr[j]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				swap = false;
			}
		}
		if (swap) break;
	}
	return arr;
};

console.log(bubbleSort([1, 2, 3, 4, 0]));
