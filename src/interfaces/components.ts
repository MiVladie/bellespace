export interface IAccordion {
	name: string;
	type: string;
	fields: IField[];
}

export interface IField {
	name: string;
	type: 'date' | 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time';
	placeholder: string;
	label?: string;
	prefix?: string;
}
