export interface IProject {
	id: number;
	name: string;
	src?: any;
}

export interface IComponent {
	id: number;
	name: string;
}

export interface IPage {
	id: number;
	title: string;
	components: IComponent[];
}
