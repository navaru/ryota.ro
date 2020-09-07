export default count => {
	const generated = [];
	const max = 40;

	function random(max) {
		return Math.round(Math.random() * (max - 1) + 1);
	}

	function generate() {
		while (true) {
			const url = `/abstract/${random(max)}.jpg`;
			if (generated.includes(url)) continue;
			generated.push(url);
			return url;
		}
	}

	return Array.from(Array(count)).map(generate);
};
