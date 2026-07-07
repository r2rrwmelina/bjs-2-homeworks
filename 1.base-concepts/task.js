"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - (4 * a * c);
	let rootFormula = -b / (2 * a);
	let formula1 = (-b + Math.sqrt(d)) / (2 * a);
	let formula2 = (-b - Math.sqrt(d)) / (2 * a);
	if (d < 0) {} else if (d === 0) {
		arr.push(rootFormula);
	} else if (d > 0) {
		arr.push(formula1);
		arr.push(formula2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let rate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let payment = loanBody * (rate + (rate / (((Math.pow(1 + rate, countMonths)) - 1))));
	let totalLoanAmount = (payment * countMonths);
	return Number(totalLoanAmount.toFixed(2));
}