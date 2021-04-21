import React from 'react';

export interface IAccordion {
	name: string;
	fields: IField[];
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

export interface IRules {
	required?: boolean;
	isURL?: boolean;
	isRoute?: boolean;
	custom?: (value: string) => string | false;
}
