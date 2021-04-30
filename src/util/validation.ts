export const identifyErrors = (fields: { name: string; value: any; rules: any }[]) => {
	let errors = {};

	for (let field of fields) {
		const error = containsErrors<typeof field.value>(field.value, field.rules);

		if (error) {
			errors = { ...errors, [field.name]: error };
		}
	}

	return errors;
};

export const containsErrors = <T>(value: T, rules: object): string | false => {
	let error: string | false = false;

	Object.entries(rules).some(([key, val]) => {
		if (key === 'required' && val && isEmpty(value)) {
			error = 'This field is required!';
			return true;
		}

		if (typeof value === 'string') {
			if (key === 'isEmail' && val && !isValidEmail(value)) {
				error = 'This is not a valid email address!';
				return true;
			}

			if (key === 'isPassword' && val && !isValidPassword(value)) {
				error = 'The password must be between 8 and 15 characters long!';
				return true;
			}

			if (key === 'isURL' && val && !isValidURL(value)) {
				error = 'This is not a valid URL!';
				return true;
			}

			if (key === 'isRoute' && val && !isValidRoute(value)) {
				error = 'Special characters are not allowed!';
				return true;
			}

			if (key === 'isHex' && val && !isValidHex(value)) {
				error = 'This is not a valid color!';
				return true;
			}
		}

		if (key === 'custom' && typeof val === 'function') {
			const result = val(value);

			if (result) {
				error = result;
				return true;
			}
		}

		return false;
	});

	return error;
};

export const isValidEmail = (value: string): boolean => {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(value).toLowerCase());
};

export const isValidPassword = (value: string): boolean => {
	return value.length >= 8 && value.length <= 15;
};

export const areSameValues = <T>(a: T, b: T): boolean => {
	return a === b;
};

export const isEmpty = (value: any): boolean => {
	if (value == null) {
		return true;
	}

	if (typeof value === 'string') {
		return value.trim() === '';
	}

	if (typeof value === 'object') {
		return !!Object.keys(value).length;
	}

	return false;
};

export const isValidToken = (value: string): boolean => {
	var re = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

	return re.test(String(value));
};

export const isValidURL = (value: string): boolean => {
	var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/;

	return re.test(String(value));
};

export const isValidRoute = (value: string): boolean => {
	var re = /^[a-zA-Z0-9_.-]*$/;

	return re.test(String(value));
};

export const isValidHex = (value: string): boolean => {
	var re = /^[0-9a-fA-F]{8}$|[0-9a-fA-F]{6}$|[0-9a-fA-F]{4}$|[0-9a-fA-F]{3}$/;

	return re.test(String(value));
};

export const hasChanged = (keys: string[], original: any, updated: any): boolean => {
	return keys.some((key) => original[key] !== updated[key]);
};
