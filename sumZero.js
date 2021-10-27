//find the numbers in array if sum them the resault = 0
//compacity o(n^2)
// function sumZero(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[j] + array[i] === 0) {
// 				return console.log([array[j], array[i]]);
// 			}
// 		}
// 	}
// }

//compacity o(1)
function sumZero(array) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		let sum = array[left] + array[right];
		if (sum === 0) return console.log([array[left], array[right]]);
		sum > 0 ? right-- : left++;
	}
}
// [3,-3]
sumZero([-3, -1, 0, 3, 5]);
