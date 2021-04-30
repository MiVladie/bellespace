import { Reducer } from 'react';

import { IStructure, IPage, IStyle, IComponent } from 'interfaces/website';
import { IFillable } from 'interfaces/validaton';
import { Action } from 'context/actions/website';

export type ActionType =
	| { type: Action.SET_WEBSITE; payload: IStructure }
	| { type: Action.ADD_PAGE; payload: { page: IPage } }
	| { type: Action.ADD_COMPONENT; payload: { pageId: number; component: IComponent } }
	| { type: Action.UPDATE_WEBSITE; payload: { name?: string; category?: number; description?: string } }
	| { type: Action.UPDATE_PAGE; payload: { pageId: number; name?: string; route?: string; description?: string } }
	| {
			type: Action.UPDATE_COMPONENT;
			payload: { pageId: number; componentId: number; fields: IFillable<any> };
	  }
	| {
			type: Action.UPDATE_STYLE;
			payload: { componentId: number; propertyId: number; attributeId: number; value: any };
	  }
	| { type: Action.DELETE_WEBSITE }
	| { type: Action.DELETE_PAGE; payload: { pageId: number } }
	| { type: Action.DELETE_COMPONENT; payload: { pageId: number; componentId: number } };

const fn: Reducer<any, ActionType> = (state: IStructure, action: ActionType) => {
	let newPages: IPage[];
	let updatedPageIndex: number;
	let updatedComponentIndex: number;

	let newStyles: IStyle[];
	let updatedStyleIndex: number;
	let updatedPropertyIndex: number;
	let updatedAttributeIndex: number;

	let newComponents: IComponent[];

	switch (action.type) {
		case Action.SET_WEBSITE:
			return {
				...action.payload
			};

		case Action.ADD_PAGE:
			return {
				...state,
				pages: [...state.pages, action.payload.page]
			};

		case Action.ADD_COMPONENT:
			newPages = [...state.pages];
			updatedPageIndex = newPages.findIndex((p) => p.id === action.payload.pageId);

			if (updatedPageIndex === -1) {
				throw new Error('Could not establish the page!');
			}

			newPages[updatedPageIndex].components.push(action.payload.component);

			return {
				...state,
				pages: newPages
			};

		case Action.UPDATE_WEBSITE:
			return {
				...state,
				...action.payload
			};

		case Action.UPDATE_PAGE:
			newPages = [...state.pages];
			updatedPageIndex = newPages.findIndex((p) => p.id === action.payload.pageId);

			if (updatedPageIndex === -1) {
				throw new Error('Could not establish the page!');
			}

			newPages[updatedPageIndex] = {
				...newPages[updatedPageIndex],
				...action.payload
			};

			return {
				...state,
				pages: newPages
			};

		case Action.UPDATE_COMPONENT:
			newPages = [...state.pages];
			updatedPageIndex = newPages.findIndex((p) => p.id === action.payload.pageId);

			if (updatedPageIndex === -1) {
				throw new Error('Could not establish the page!');
			}

			updatedComponentIndex = newPages[updatedPageIndex].components.findIndex(
				(c) => c.id === action.payload.componentId
			);

			newPages[updatedPageIndex].components[updatedComponentIndex].content = {
				...newPages[updatedPageIndex].components[updatedComponentIndex].content,
				...action.payload.fields
			};

			return {
				...state,
				pages: newPages
			};

		case Action.UPDATE_STYLE:
			newStyles = [...state.styles];
			updatedStyleIndex = newStyles.findIndex((s) => s.componentId === action.payload.componentId);

			if (updatedStyleIndex === -1) {
				throw new Error('Could not establish the component!');
			}

			updatedAttributeIndex = newStyles[updatedStyleIndex].properties.findIndex(
				(p) => p.id === action.payload.attributeId
			);

			if (updatedAttributeIndex === -1) {
				throw new Error('Could not establish the attribute!');
			}

			updatedPropertyIndex = newStyles[updatedStyleIndex].properties[updatedAttributeIndex].attributes.findIndex(
				(a) => a.id === action.payload.propertyId
			);

			if (updatedPropertyIndex === -1) {
				throw new Error('Could not establish the property!');
			}

			newStyles[updatedStyleIndex].properties[updatedAttributeIndex].attributes[updatedPropertyIndex].value =
				action.payload.value;

			return {
				...state,
				styles: newStyles
			};

		case Action.DELETE_WEBSITE:
			return null;

		case Action.DELETE_PAGE:
			return {
				...state,
				pages: state.pages.filter((p) => p.id !== action.payload.pageId)
			};

		case Action.DELETE_COMPONENT:
			newPages = [...state.pages];
			updatedPageIndex = newPages.findIndex((p) => p.id === action.payload.pageId);

			if (updatedPageIndex === -1) {
				throw new Error('Could not establish the page!');
			}

			newComponents = newPages[updatedPageIndex].components.filter((c) => c.id !== action.payload.componentId);

			newPages[updatedPageIndex].components = newComponents;

			return {
				...state,
				pages: newPages
			};

		default:
			throw new Error('Could not identify the action! Please, check for misspellings!');
	}
};

export default fn;
