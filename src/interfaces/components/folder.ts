import { IColor } from './color';
import { IDropdown } from './dropdown';
import { IInput } from './input';
import { ISlider } from './slider';

export interface IFolder {
	name: string;
	fields: TField[];
}

export type TField = Color | Dropdown | Slider | Input;

interface Color extends IColor {
	type: 'color';
}

interface Dropdown extends IDropdown {
	type: 'dropdown';
}

interface Slider extends ISlider {
	type: 'slider';
}

interface Input extends IInput {
	type: 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text';
}
