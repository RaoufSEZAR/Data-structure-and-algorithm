function isSubsequence(str1, str2) {
	var i = 0;
	var j = 0;
	if (!str1) return console.log(true);
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return console.log(true);
		j++;
	}
	return console.log(false);
}

// isSubsequence Solution - Recursive but not O(1) Space
/*  function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }

  */

isSubsequence("hello", "hello world"); //true
isSubsequence("sing", "string"); //true
isSubsequence("sing", "strin"); //false  order matters
