function mxdiflg(a1, a2) {
	function maxAndMinLength(stringsArr) {
		if (stringsArr[0] == undefined) return -1;
		let mx = stringsArr[0].length;
		let mn = stringsArr[0].length;
		stringsArr.forEach((item) => {
			if (item.length > mx) mx = item.length;
			if (item.length < mn) mn = item.length;
		})
		return [mx, mn];
	}
	
	const result1 = maxAndMinLength(a1);
	const result2 = maxAndMinLength(a2);

	if (result1 == -1 || result2 == -1) {
		return -1;
	}

	return Math.max(result1[0]-result2[1], result2[0]-result1[1]);

}

const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(a1, a2));
