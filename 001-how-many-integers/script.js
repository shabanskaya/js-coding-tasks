function integers(x, y, k) {
	let a = Math.floor(x);
	if (a%k != 0) {
		a = a - (a%k) + k;
	}
	let s = 0;
	for (let i = a; i<=y; i+=k) {
		s+=1;
	}
	return s;
}

console.log(integers(6, 11, 2));