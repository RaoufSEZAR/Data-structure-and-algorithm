function productOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return console.log(arr[0] * productOfArray(arr.slice(1)));
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60
