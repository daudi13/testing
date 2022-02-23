

const reverseString = string => {
	const str = string;
	const reversed = str.toLowerCase().split('').reverse();
	console.log(reversed.join(',').replaceAll(',', ''));
}


reverseString('Mark');

module.exports = reverseString