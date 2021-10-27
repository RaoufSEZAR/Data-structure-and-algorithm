function destroyer(arr, ...valsToRemove) {
	return arr.filter((elem) => !valsToRemove.includes(elem));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 1 , 1

//same
// function destroyer(arr) {
//     var valsToRemove = Array.from(arguments).slice(1);
//     return arr.filter(function(val) {
//       return !valsToRemove.includes(val);
//     });
//   }
