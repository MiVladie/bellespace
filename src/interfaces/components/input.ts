import { ICommonRules, IField } from '.';

export interface IInput extends IField<string> {
	type: 'text' | 'textarea' | 'email' | 'tel' | 'number' | 'password';
	placeholder: string;
	prefix?: React.ReactNode;
	rules?: IRules;
	className?: string;
	step?: number;
	min?: number;
	max?: number;
	disabled?: boolean;
	autoComplete?: boolean;
}

export interface IRules extends ICommonRules<string> {
	isURL?: boolean;
	isRoute?: boolean;
}
