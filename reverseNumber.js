function reverseString(s) {
	try {
		s = s.split("").reverse().join("");
		console.log(s);
	} catch (e) {
		console.log("s.split is not a function");
	}

	console.log(s);
}
reverseString("1234");
