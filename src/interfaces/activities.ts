import React from 'react';

export interface IAction {
	id: number;
	name: string;
	onClick: () => void;
}

export interface IBar {
	id: number;
	icon: React.ReactNode;
	label?: string;
	onClick: () => void;
}
