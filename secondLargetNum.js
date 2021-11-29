function getSecondLargest(nums) {
	// Complete the function
	const max = Math.max(...nums);

	nums = nums.filter((num) => num !== max);

	return Math.max(...nums);
}
console.log(getSecondLargest([2, 4, 5, 6, 7]));
