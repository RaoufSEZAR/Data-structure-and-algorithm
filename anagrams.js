//to find same character and word length even if the words different in mean
// old js
// function anagrams(first, second) {
// 	if (first.length !== second.length) {
// 		return false;
// 	}
// 	let lookup = {};

// 	for (let i = 0; i < first.length; i++) {
// 		let letter = first[i];
// 		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
// 	}
// 	for (let i = 0; i < second.length; i++) {
// 		let letter = second[i];
// 		if (!lookup[letter]) {
// 			return false;
// 		} else;
// 		{
// 			lookup[letter] -= 1;
// 		}
// 	}

// 	return console.log("true");
// }

// with ecma6
function anagrams(arr1, arr2) {
	if (arr1.length !== arr2.length) return console.log(false);
	let lookup = {};
	for (let str of arr1) {
		lookup[str] > 0 ? (lookup[str] += 1) : (lookup[str] = 1);
	}
	for (let str of arr2) {
		if (!lookup[str]) return console.log(false);
		else lookup[str] -= 1;
	}

	return console.log("true");
}
//{a:1,m:1,e:1,r:1}
anagrams("ainemc", "cinema");
anagrams("12345", "54132");
anagrams("12345", "54152");

//////for Numbera ///////

function sameFrequency(num1, num2) {
	let strNum1 = num1.toString();
	let strNum2 = num2.toString();
	if (strNum1.length !== strNum2.length) return console.log(false);

	let countNum1 = {};
	let countNum2 = {};

	for (let i = 0; i < strNum1.length; i++) {
		countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
	}

	for (let j = 0; j < strNum2.length; j++) {
		countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
	}

	for (let key in countNum1) {
		if (countNum1[key] !== countNum2[key]) return console.log(false);
	}

	return console.log(true);
}

sameFrequency(12345, 54152);
sameFrequency(12345, 54132);
