//time complexity n^2
// function maxSubArraySum(arr, num) {
// 	if (arr.length > num) return null;

// 	let max = -Infinity;
// 	for (let i = 0; i < arr.length - num + 1; i++) {
// 		let temp = 0;
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[i + j];
// 		}
// 		if (temp > max) {
// 			max = temp;
// 		}
// 		console.log(temp, max);
// 	}
// 	return max;
// }

// //time complexity n
// function maxSubArraySum(arr, num) {
// 	let maxSum = 0;
// 	let tempSum = 0;
// 	if (arr.length < num) return console.log(null);
// 	for (let i = 0; i < num; i++) {
// 		maxSum += arr[i];
// 	}
// 	tempSum = maxSum;
// 	for (let i = num; i < arr.length; i++) {
// 		tempSum = tempSum - arr[i - num] + arr[i];
// 		maxSum = Math.max(maxSum, tempSum);
// 	}
// 	return console.log(maxSum);
// }

// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); //10
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); //17
// maxSubArraySum([4, 2, 1, 6], 1); //6
// maxSubArraySum([4, 2, 1, 6, 2], 4); //13
// maxSubArraySum([], 2); //null

function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;

	let total = 0;
	for (let i = 0; i < num; i++) {
		total += arr[i];
	}
	let currentTotal = total;
	for (let i = num; i < arr.length; i++) {
		currentTotal += arr[i] - arr[i - num];
		total = Math.max(total, currentTotal);
	}
	return total;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
