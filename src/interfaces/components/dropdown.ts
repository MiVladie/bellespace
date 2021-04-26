import { IField } from '.';

export interface IDropdown extends IField<number> {
	options: IOption[];
	placeholder: string;
}

export interface IOption {
	value: number;
	label: string;
}
