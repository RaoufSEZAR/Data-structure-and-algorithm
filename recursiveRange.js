function recursiveRange(x) {
	if (x === 0) return 0;
	return x + recursiveRange(x - 1);
}

recursiveRange(6); // 21  = (0+1+2+3+4+5+6)
recursiveRange(10); // 55
