function uniqueSymbol(s) {
	let lowS = s.toLowerCase();
	let dict ={};
	for (let i = 0; i < s.length; i++) {
		if (lowS[i] in dict) {
			dict[lowS[i]] += 1;
		} else {
			dict[lowS[i]] = 1;
		}
	}
	for (let key in dict) {
		if (dict[key] == 1) {
			if (s.indexOf(key) != -1) return key;
			else return key.toUpperCase();
			}
		}
	return "";
}

console.log(uniqueSymbol('stress'));
console.log(uniqueSymbol('sTreSS'));
console.log(uniqueSymbol('abba'));
console.log(uniqueSymbol('stTreSS'));
