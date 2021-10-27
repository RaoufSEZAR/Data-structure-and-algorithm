const fizzBuzz = (num) => {
	const list = [];
	let index = 1;
	while (index <= num) {
		if (index % 3 === 0 && index % 5 !== 0) {
			console.log(`${index} is Fizz`);
			list.push("Fizz");
		} else if (index % 5 === 0 && index % 3 !== 0) {
			console.log(`${index} is Buzz`);
			list.push("Buzz");
		} else if (index % 3 === 0 && index % 5 === 0) {
			console.log(`${index} is FizzBuzz`);
			list.push("FizzBuzz");
		} else {
			list.push(index);
		}
		index++;
	}
	console.log(list);
};
fizzBuzz(15);
