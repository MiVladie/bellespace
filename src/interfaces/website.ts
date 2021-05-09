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
	componentId: number;
	name: string;
	content: IContent;
}

export interface IContent {
	[key: string]: any;
}

export interface IStyle {
	componentId: number;
	properties: IProperty;
}

export interface IProperty {
	[key: string]: {
		[key: string]: string | number;
	};
}
