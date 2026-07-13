function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((arr, indx) => arr === arr2[indx]);
}

function getUsersNamesInAgeRange(users, gender) {
	if (users.length === 0 || users.findIndex((user) => user.gender === gender) === -1) {
		return 0;
	} else {
		const arr = [];
		arr.push(...users.filter((user) => user.gender === gender));
		return arr.map(user => user.age).reduce((acc, age) => age + acc) / arr.length;
	}
}