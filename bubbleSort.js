// function bubbleSort(array) {
//  let noswap;
// 	for (let i = 0; i < array.length; i++) {
// 		noswap = true;
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j] > array[j + 1]) {
// 				let temp = array[j];
// 				array[j] = array[j + 1];
// 				array[j + 1] = temp;
// 				noswap = false;
// 			}
// 		}
// 		if (noswap) break;
// 	}
// 	return array;
// }

// same code with ecma
function bubbleSort(array) {
	const swap = (array, ind1, ind2) => {
		[array[ind1], array[ind2]] = [array[ind2], array[ind1]];
	};
	for (let i = array.length; i > 0; i--)
		for (let j = 0; j < i - 1; j++)
			if (array[j] > array[j + 1]) swap(array, j, j + 1);
	return array;
}
console.log(bubbleSort([54, 262, 56, 48, 13, 959])); //[ 13, 48, 54, 56, 262, 959 ]
