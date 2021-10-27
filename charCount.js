function countChar(str) {
	const array = {};
	if (str.length === 0) {
		return console.log("It's Empty");
	}
	for (let char of str) {
		char = char.toLowerCase();
		array[char] > 0 ? array[char]++ : (array[char] = 1);
	}
	return console.log(array);
}

countChar("heeLLLllllo"); //{ h: 1, e: 2, l: 7, o: 1 }
