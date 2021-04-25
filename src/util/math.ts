interface ClampOptions {
	min?: number;
	max?: number;
}

export const clamp = (value: number, options: ClampOptions): number => {
	let result: number = value;

	if (options.min && +value < options.min) {
		result = options.min;
	}

	if (options.max && +value > options.max) {
		result = options.max;
	}

	return result;
};

export const roundToStep = (value: number, step: number): number => {
	let inv = 1.0 / step;

	let result = Math.round(+value * inv) / inv;

	return result;
};
