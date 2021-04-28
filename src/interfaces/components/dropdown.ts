import { IField } from '.';
import { ICommonRules } from 'interfaces/validaton';

export interface IDropdown extends IField<number | null> {
	options: IOption[];
	placeholder: string;
	rules?: ICommonRules<number>;
}

export interface IOption {
	value: number;
	label: string;
}
