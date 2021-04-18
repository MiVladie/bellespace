import React from 'react';

export interface IAction {
	id: number;
	name: string;
}

export interface IBar {
	id: number;
	icon: React.ReactNode;
	label?: string;
	heading: string;
	actions?: IAction[];
}
