const Calculator = require("../modules/calc");
const { stringLength, reverseString, capitalize } = require("../modules/task1")

const calc = new Calculator()
const str = `mother`;
const a = 1;
const b = 2

// check the length of a string
test('check length of string', () => {
	expect(stringLength('microverse')).toBe(10);
})

// checking whether string has >= 1 letter and <= 10
test(`check length of ${str} is between 1 and 10`, () => {
	expect(stringLength(str)).toBeGreaterThan(1) && expect(functions.stringLength(str)).toBelesserThan(10)
})

// testing the reverse function
test(`reverse the string ${str} to rehtom`, () => {
	expect(reverseString(str)).toMatch(`rehtom`)
})

//  testing capitalize 

test(`capitalize the ${str} to MOTHER`, () => {
	expect(capitalize(str)).toMatch('MOTHER')
})

// test calulator 

describe('test calculator functionality', () => {
	test(`${a} + ${b} = 3`, () => {
		expect(calc.add(a, b)).toEqual(3)
	});

	test(`${a} - ${b} = -1`, () => {
		expect(calc.subtract(a, b)).toEqual(-1)
	});

	test(`${a} * ${b} = 2`, () => {
		expect(calc.multiply(a, b)).toEqual(2)
	})

	test(`${a}/${b} = 0.5`, () => {
		expect(calc.divide(a, b)).toEqual(0.5)
	} )
})