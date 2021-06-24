export const RGBAToHex = (value: string) => {
	const [r, g, b, a] = value
		.replace('rgb', '')
		.replace('a', '')
		.replace('(', '')
		.replace(')', '')
		.replace(' ', '')
		.split(',')
		.map((val) => +val);

	const outParts = [r.toString(16), g.toString(16), b.toString(16)];

	if (typeof a !== 'undefined') {
		outParts.push(
			Math.round(a * 255)
				.toString(16)
				.substring(0, 2)
		);
	}

	outParts.forEach((part, i) => {
		if (part.length === 1) {
			outParts[i] = '0' + part;
		}
	});

	return '#' + outParts.join('');
};

export const HexToRGBA = (hex: string) => {
	let r, g, b, a;

	hex = hex.replace('#', '');

	if (hex.length === 3) {
		r = hex.charAt(0);
		g = hex.charAt(1);
		b = hex.charAt(2);
	} else if (hex.length === 6) {
		r = hex.substring(0, 2);
		g = hex.substring(2, 4);
		b = hex.substring(4, 6);
	} else if (hex.length === 8) {
		r = hex.substring(0, 2);
		g = hex.substring(2, 4);
		b = hex.substring(4, 6);
		a = hex.substring(6, 8);
	} else {
		return '';
	}

	if (r.length === 1) {
		r += r;
	}
	if (g.length === 1) {
		g += g;
	}
	if (b.length === 1) {
		b += b;
	}
	if (typeof a !== 'undefined' && a.length === 1) {
		a += a;
	}

	r = parseInt(r, 16);
	g = parseInt(g, 16);
	b = parseInt(b, 16);

	if (typeof a !== 'undefined') {
		a = parseInt(a, 16) / 255;
	}

	if (typeof a !== 'undefined') {
		return `rgba(${r}, ${g}, ${b}, ${a})`;
	}

	return `rgba(${r}, ${g}, ${b})`;
};
