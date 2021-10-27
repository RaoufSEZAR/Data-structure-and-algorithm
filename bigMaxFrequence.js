// Important: Don't change the function name

const birthdayCake = (arr) => {
	// Your code goes here
	let max = Math.max(...arr);
	let element = 0;

	for (let index = 0; index < arr.length; index++) {
		if (arr[index] === max) element = element + 1;
		else index++;
	}
	return console.log(element);
};

birthdayCake([4, 4, 1, 3]);
// we have two 4 so the output is 2 