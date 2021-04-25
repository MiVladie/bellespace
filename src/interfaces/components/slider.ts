export interface IMark {
	[key: number]: string;
}

export interface IOptions {
	step: number;
	min: number;
	max: number;
	withInput?: boolean;
}
