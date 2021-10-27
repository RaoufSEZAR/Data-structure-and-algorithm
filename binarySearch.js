//best case o(1)  worst o(log n)
const binarySearch = (list, item) => {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = list[mid];

		if (guess === item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null; //if not found
};
console.log(binarySearch([1, 2, 3, 4, 5], 1)); //0
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4
