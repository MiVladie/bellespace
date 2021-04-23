import React from 'react';

export interface IAccordion {
	name: string;
	fields: (IField | IDropdown)[];
}

export interface IField {
	name: string;
	type: 'date' | 'textarea' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'time';
	placeholder: string;
	label?: string;
	info?: React.ReactNode;
	prefix?: string;
	rules?: IRules;
}

export interface IRules extends CommonRules {
	isURL?: boolean;
	isRoute?: boolean;
}

export interface IDropdown {
	name: string;
	type: 'dropdown';
	placeholder: string;
	options: IOption[];
	label?: string;
	info?: React.ReactNode;
	rules?: CommonRules;
}

export interface IOption {
	value: number;
	label: string;
}

interface CommonRules {
	required?: boolean;
	custom?: (value: string) => string | false;
}
