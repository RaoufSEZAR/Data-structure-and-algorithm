// function fibonacci(num) {
// 	let fib = 0;
// 	let step = 1;
// 	let fibonacci = [];
// 	while (fib < num) {
// 		fibonacci.push(fib);

// 		fib += step;
// 		step = fib - step;
// 	}
// 	return fibonacci;
// }
// console.log(fibonacci(50)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

console.log(fib(50)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
