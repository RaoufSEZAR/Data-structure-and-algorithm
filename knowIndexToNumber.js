// time complexity n;
// function sorted(array, num) {
// 	if (array.length === 0) return null;
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] === num) {
// 			console.log(array.indexOf(array[i]));
// 		}
// 	}
// }

//  time complexity n;
// function sorted(array, num) {
// 	if (array.length === 0) return null;
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] === num) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// time complexity log(n);
function sorted(array, num) {
	let min = 0;
	let max = array.length - 1;
	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = array[middle];
		if (currentElement < num) {
			min = middle + 1;
		} else if (currentElement > num) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
}

sorted([1, 2, 3, 4, 5], 2);
