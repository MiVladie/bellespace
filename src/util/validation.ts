import { IRules } from 'interfaces/components/input';
import { IValidatable, IError } from 'interfaces/validaton';

export const containsErrorsInSet = (form: IValidatable[]): IError => {
	const errors: IError = {};

	for (const field of form) {
		if (field.rules) {
			const result = containsErrors(field.value, field.rules);

			if (result) {
				errors[field.name] = result;
			}
		}
	}

	return errors;
};

export const containsErrors = (value: string, rules: IRules): string | false => {
	let error: string | false = false;

	Object.entries(rules).some(([key, val]) => {
		if (key === 'required' && val && isEmpty(value)) {
			error = 'This field is required!';
			return true;
		}

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

		if (key === 'custom' && val) {
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

export const isValidEmail = (value: string) => {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(value).toLowerCase());
};

export const isValidPassword = (value: string) => {
	return value.length >= 8 && value.length <= 15;
};

export const areSameValues = (a: string | number, b: string | number) => {
	return a === b;
};

export const isEmpty = (value: string | null) => {
	return value == null || value.trim() === '';
};

export const isValidToken = (value: string) => {
	var re = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

	return re.test(String(value));
};

export const isValidURL = (value: string) => {
	var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/;

	return re.test(String(value));
};

export const isValidRoute = (value: string) => {
	var re = /^[a-zA-Z0-9_.-]*$/;

	return re.test(String(value));
};

export const isValidHex = (value: string) => {
	var re = /^[0-9a-fA-F]{8}$|[0-9a-fA-F]{6}$|[0-9a-fA-F]{4}$|[0-9a-fA-F]{3}$/;

	return re.test(String(value));
};
