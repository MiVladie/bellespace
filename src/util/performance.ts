export const deviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return 'tablet';
	} else if (
		/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
	) {
		return 'mobile';
	}
	return 'desktop';
};

export const establishDebounce = (): number => {
	let defaultDebounce = 100;

	if (deviceType() !== 'desktop') {
		return defaultDebounce;
	}

	if (navigator.hardwareConcurrency) {
		if (navigator.hardwareConcurrency >= 8) {
			defaultDebounce = 0;
		} else if (navigator.hardwareConcurrency >= 6) {
			defaultDebounce *= 0.25;
		} else if (navigator.hardwareConcurrency >= 4) {
			defaultDebounce *= 0.5;
		} else if (navigator.hardwareConcurrency >= 2) {
			defaultDebounce *= 0.75;
		}
	}

	return defaultDebounce;
};

export const presetDebounce = establishDebounce();
