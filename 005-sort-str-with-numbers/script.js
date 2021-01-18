function sortStrings(s) {
	const stringsArray = s.split(' ');
	const r = /\d/;
	function compare(a, b) {
		const n = +a[a.search(r)];
		const m = +b[b.search(r)];
		return (n-m);
	}
	return stringsArray.sort(compare).join(' ');
}

console.log(sortStrings("is2 Thi1s T4est 3a"));
console.log(sortStrings("4of Fo1r pe6ople g3ood th5e the2"));
console.log(sortStrings(""));