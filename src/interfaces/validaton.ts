export interface IValidatable {
	name: string;
	value: string;
	rules?: IRule;
}

export interface IRule {
	[key: string]: string | number | Function;
}

export interface IValue {
	[key: string]: string | number;
}

export interface IError {
	[key: string]: string;
}
