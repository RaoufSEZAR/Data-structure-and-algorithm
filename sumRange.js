function sumRange(n) {
	if (n === 1) return 1;
	return n + sumRange(n - 1);
}
sumRange(3); //3+2+1=6
sumRange(4); //4+3+2+1=10
