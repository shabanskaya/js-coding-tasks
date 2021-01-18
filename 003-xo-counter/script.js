function xoxo(s) {
	function howManyLetters(letter, lowS) {
		let x = 0;
		while (lowS.indexOf(letter) != -1) {
			lowS = lowS.slice(lowS.indexOf(letter)+1)
			x+=1;
		}
		return x;
	}

	let lowS = s.toLowerCase();
	return (howManyLetters('x', lowS) == howManyLetters('o', lowS));
}

console.log(xoxo('xxoojfjfjf'));
console.log(xoxo('xpox'));
console.log(xoxo('xoox'));
console.log(xoxo('xxooxooxoXxoooxx'));
