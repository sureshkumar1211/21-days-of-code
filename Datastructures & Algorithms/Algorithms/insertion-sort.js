const insertionSort = arr => {
	for (let i = 0; i < arr.length - 1; i++) {
		let iteration = i;
		for (let j = i + 1; j > 0; j--) {
			if (arr[j] < arr[iteration]) {
				[arr[j], arr[iteration]] = [arr[iteration], arr[j]];
			} else if (arr[j] > arr[iteration]) {
				break;
			}
			iteration--;
		}
		if (iteration === i) break;
	}
	return arr;
};

console.log(insertionSort([1, 2, 3, 4, 5]));
