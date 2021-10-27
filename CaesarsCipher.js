function rot13(str) {
	var alphabets = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		" ",
		"-",
		"_",
		".",
		"&",
		"?",
		"!",
		"@",
		"#",
		"/",
	];

	var alphabets13 = [
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		" ",
		"-",
		"_",
		".",
		"&",
		"?",
		"!",
		"@",
		"#",
		"/",
	];

	var resultStr = [];
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < alphabets.length; j++) {
			if (str[i] === alphabets[j]) {
				resultStr.push(alphabets13[j]);
			}
		}
	}
	return resultStr.join("");
}

rot13("SERR PBQR PNZC");
