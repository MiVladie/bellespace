export interface IValidatable {
	name: string;
	value: string;
	rules?: IRule;
}

export interface IRule {
	[key: string]: string | number | Function;
}

export interface IError {
	[key: string]: string;
}
