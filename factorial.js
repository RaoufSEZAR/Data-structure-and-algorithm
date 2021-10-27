function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num - 1);
}

// function factorial(n) {
// 	let sum = 1;
// 	if (n === 0 || n === 1) return 1;
// 	while (n !== 1) {
// 		sum *= n; //4//12//24
// 		--n;
// 		console.log(sum);
// 	}
// 	return console.log(sum);
// }
factorial(4);
// 4*3*2*1
// function factorialize(num) {
//     var result = num;
//     if (num === 0 || num === 1)
//       return 1;
//     while (num > 1) {
//       num--;
//       result *= num;
//     }
//     return result;
//   }
//   factorialize(5);
