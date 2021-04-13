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
