import { IField } from '.';

export interface ISlider extends IField<number> {
	marks?: IMark;
	options?: IOptions;
}

export interface IMark {
	[key: number]: string;
}

export interface IOptions {
	step: number;
	min: number;
	max: number;
	withInput?: boolean;
}
