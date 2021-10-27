//the numbers in first array same in the second after square it
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let arr3 = [];
	for (let s of arr1) {
		let s2 = s ** 2;
		arr3.push(s2);
		for (let i = 0; i < arr1.length; i++) {
			if (arr3[i] === arr2[i]) console.log(arr2[i] + "true");
		}
	}
}
same([1, 2, 3], [1, 4, 9]);
