


function stringLength(string) {
	const str = string;
	const strLength = str.split('').length;

	if (strLength >= 1 && strLength <= 10) {
		return strLength;
	} else {
		throw 'String exeeds 10 characters'
	}
}


module.exports = stringLength;
