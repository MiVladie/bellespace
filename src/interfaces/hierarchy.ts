export interface IAction {
	id: number;
	name: string;
	onClick: () => void;
	disabled?: boolean;
	loading?: boolean;
}

export interface IBar {
	id: number;
	icon: React.ReactNode;
	label?: string;
	onClick: () => void;
}
