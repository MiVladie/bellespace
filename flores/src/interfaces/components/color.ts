import { IField } from '.';
import { ICommonRules } from 'interfaces/validaton';

export interface IColor extends IField<string> {
	placeholder?: string;
	rules?: IRules;
	presets?: IPreset[];
	options?: IOptions;
}

export interface IRules extends ICommonRules<string> {
	isHex?: boolean;
}

export interface IPreset {
	value: string;
	label?: string;
}

export interface IOptions {
	withAlpha?: boolean;
}
