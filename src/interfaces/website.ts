export interface IStructure {
	id: number;
	name: string;
	category: number;
	description?: string;
	pages: IPage[];
	styles: IStyle[];
}

export interface IPage {
	id: number;
	name: string;
	route: string;
	description?: string;
	options?: IPageOptions;
	components: IComponent[];
}

export interface IPageOptions {
	disableNameModification?: boolean;
	disableRouteModification?: boolean;
	disableDeletion?: boolean;
	position?: 'top' | 'bottom';
}

export interface IComponent {
	id: number;
	name: string;
	content: IContent;
}

export interface IContent {
	[key: string]: any;
}

export interface IStyle {
	componentId: number;
	properties: IProperty[];
}

export interface IProperty {
	id: number;
	heading: string;
	attributes: IAttribute[];
}

export interface IAttribute {
	id: number;
	name: string;
	attribute: string;
	type:
		| 'date'
		| 'textarea'
		| 'email'
		| 'number'
		| 'password'
		| 'tel'
		| 'text'
		| 'time'
		| 'dropdown'
		| 'slider'
		| 'color';
	value: any;
	rules?: any;
	options?: any;
}
