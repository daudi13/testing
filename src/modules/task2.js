

const reverseString = string => {
	const str = string;
	const reversed = str.toLowerCase().split('').reverse();
	return reversed.join(',').replaceAll(',', '');
}


reverseString('Mark');

module.exports = reverseString