const myMap = new Map();
myMap.set("I", 1);
myMap.set("V", 5);
myMap.set("X", 10);
myMap.set("L", 50);
myMap.set("C", 100);
myMap.set("D", 500);
myMap.set("M", 1000);
function BasicRomanNumerals(str) {
	let result = 0;
	if (str) {
		let str1 = str.split("");
		str1.forEach(function (e, i) {
			result +=
				myMap.get(e) < myMap.get(str1[i + 1]) ? -myMap.get(e) : myMap.get(e);
		});
	}
	return result;
}

console.log(BasicRomanNumerals("IV"));
console.log(BasicRomanNumerals("V"));
console.log(BasicRomanNumerals("VII"));
