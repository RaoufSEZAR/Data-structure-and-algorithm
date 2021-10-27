function countUniqeValue(nums) {
	if (nums.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < nums.length; j++) {
		if (nums[i] !== nums[j]) {
			i++;
			nums[i] = nums[j];
		}
		console.log(i, j);
	}
	return console.log(i + 1); //will retrun the number of unique numbers in the array
}
countUniqeValue([1, 2, 2, 2, 4, 4, 5, 5, 7]);
//[1,2,4,5,7] so will return 5
