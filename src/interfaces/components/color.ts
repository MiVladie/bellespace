import { IField } from '.';

export interface IColor extends IField<string> {
	placeholder: string;
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
