// normal js
// let search = function (nums, target) {
// 	for (let i = 0; i <= nums.length; i++)
// 		if (nums[i] === target) return console.log(i);
// 	return console.log("-1");
// };

// search([-1, 0, 3, 5, 9, 12], 12);

// ecma 6+
let search = function (nums, target) {
	for (const num of nums)
		if (num === target) return console.log(nums.indexOf(num));
	return console.log("-1");
};

search([-1, 0, 3, 5, 9, 12], 12);
