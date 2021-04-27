import { IField } from '.';
import { ICommonRules } from 'interfaces/validaton';

export interface IColor extends IField<string> {
	placeholder: string;
	rules?: ICommonRules<string>;
	presets?: IPreset[];
	options?: IOptions;
}

export interface IPreset {
	value: string;
	label?: string;
}

export interface IOptions {
	withAlpha?: boolean;
}
