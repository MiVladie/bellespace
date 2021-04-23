import { IRules } from 'interfaces';

export interface IValidatable {
	name: string;
	value: string;
	rules?: IRules;
}

export interface IValue {
	[key: string]: string | number;
}

export interface IError {
	[key: string]: string;
}
