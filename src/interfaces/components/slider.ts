import { IField } from '.';
import { ICommonRules } from 'interfaces/validaton';

export interface ISlider extends IField<number> {
	rules?: ICommonRules<number>;
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
