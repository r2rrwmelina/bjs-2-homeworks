function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	const sum = arr.reduce((acc, curr) => acc + curr, 0);
	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sum = arr.reduce((acc, curr) => acc + curr);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return max - min;
}

function sumEvenElementWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	for (let num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
		}
	}
	return sumEvenElement;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = sumEvenElementWorker(...arr);
	let sumOddElement = 0;
	for (let num of arr) {
		if (num % 2 !== 0) {
			sumOddElement += num;
		}
	}
	let difference = sumEvenElement - sumOddElement;
	return difference;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = sumEvenElementWorker(...arr);
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	const arrays = [...arrOfArr];
	for (let arr of arrays) {
		const sumOfArray = func(...arr);
		if (sumOfArray >= maxWorkerResult) {
			maxWorkerResult = sumOfArray;
		}
	}
	return maxWorkerResult;
}