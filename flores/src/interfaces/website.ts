export interface IStructure {
	id: number;
	name: string;
	category: number;
	description?: string;
	pages: IPages;
	styles: IStyles;
}

export interface IPages {
	[key: string]: IPage;
}

export interface IPage {
	name: string;
	route: string;
	description?: string;
	options?: IPageOptions;
	components: IComponents;
}

export interface IPageOptions {
	disableNameModification?: boolean;
	disableRouteModification?: boolean;
	disableDeletion?: boolean;
	position?: 'top' | 'bottom';
}

export interface IComponents {
	[key: string]: IComponent;
}

export interface IComponent {
	id: string;
	name: string;
	content: IContent;
}

export interface IContent {
	[key: string]: any;
}

export interface IStyles {
	[key: string]: IStyle;
}

export interface IStyle {
	[key: string]: {
		[key: string]: string | number;
	};
}
