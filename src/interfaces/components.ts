export interface IAccordion {
	name: string;
	fields: IField[];
}

export interface IField {
	name: string;
	type: 'date' | 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time';
	placeholder: string;
	label?: string;
	info?: string;
	prefix?: string;
	rules?: IRules;
}

export interface IRules {
	required?: boolean;
	isURL?: boolean;
	isRoute?: boolean;
}
