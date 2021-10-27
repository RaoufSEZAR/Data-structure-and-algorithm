// function selectionSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		let lowest = i;
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[lowest] > array[j]) {
// 				lowest = j;
// 			}
// 		}
// 		if (i !== lowest) {
// 			let temp = array[i];
// 			array[i] = array[lowest];
// 			array[lowest] = temp;
// 		}
// 	}
// 	return array;
// }

// same code with ecma
function selectionSort(array) {
	const swap = (array, ind1, ind2) => {
		[array[ind1], array[ind2]] = [array[ind2], array[ind1]];
	};
	for (let i = 0; i < array.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[lowest] > array[j]) {
				lowest = j;
			}
		}
		if (i !== lowest) swap(array, i, lowest);
	}
	return array;
}

console.log(selectionSort([8, 5, 9, 8, 5, 6]));
