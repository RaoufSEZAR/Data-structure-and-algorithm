function telephoneCheck(str) {
	var isphone =
		/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);

	return isphone;
}

telephoneCheck("555-555-5555");
