//best case o(1)  worst o(n)
function linnerSearch(array, value) {
	array.find((val) => {
		if (value === val) console.log(array.indexOf(val));
		else console.log("-1");
	});
}
linnerSearch([12, 2, 3, 4, 8, 9, 7, 4], 4);

// function linearSearch(arr, key){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === key) return i
//     }
//     return -1
// }
