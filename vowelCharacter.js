// function vowelsAndConsonants(s) {
// 	let strC = "";
// 	for (var i = 0; i < s.length; i++) {
// 		if (
// 			s[i] == "a" ||
// 			s[i] == "e" ||
// 			s[i] == "i" ||
// 			s[i] == "o" ||
// 			s[i] == "u"
// 		) {
// 			console.log(s[i]);
// 		} else {
// 			strC = strC.concat(s[i]).concat("\n");
// 		}
// 	}

// 	console.log(strC);
// }
// vowelsAndConsonants("javascripts");

//second solution
const vowelsAndconsonants = (str) => {
	const vowels = ["a", "e", "i", "o", "u"];
	//convert string to array and get rid of non alphabets as we are just interested on consonants and vowel
	const str_array = str.replace(/[^a-zA-Z]/g, "").split("");
	//pluck vowels
	const vowels_final = str_array.filter((a) =>
		vowels.includes(a.toLowerCase())
	);
	//pluck consonants
	const consonant_final = str_array.filter(
		(a) => !vowels.includes(a.toLowerCase())
	);
	//to print any vowels from a word on a new line and then consonant in the order they appear.
	return vowels_final.join("\n") + "\n" + consonant_final.join("\n");
};

console.log(vowelsAndconsonants("tEstOnlY and nothing else"));
