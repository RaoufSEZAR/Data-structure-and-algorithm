function palindrome(str) {
	var re = /[^A-Za-z0-9]/g;
	str = str.toLowerCase().replace(re, "");
	var len = str.length;
	for (var i = 0; i < len / 2; i++) {
		if (str[i] !== str[len - 1 - i]) {
			return false;
		}
	}
	return true;
}
palindrome("A man, a plan, a canal. Panama");

// same result
/* function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");
  */
