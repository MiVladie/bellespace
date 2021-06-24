import { Reducer } from 'react';

import { IStructure, IPage, IStyle, IComponent, IPages, IStyles, IComponents } from 'interfaces/website';
import { IFillable } from 'interfaces/validaton';
import { Action } from 'context/actions/website';

export type ActionType =
	| { type: Action.SET_WEBSITE; payload: IStructure }
	| { type: Action.ADD_PAGE; payload: { id: string; page: IPage } }
	| {
			type: Action.ADD_COMPONENT;
			payload: { pageId: string; id: string; component: IComponent; style: IStyles };
	  }
	| { type: Action.UPDATE_WEBSITE; payload: { name?: string; category?: number; description?: string } }
	| {
			type: Action.UPDATE_PAGE;
			payload: { id: string; content: { name?: string; route?: string; description?: string } };
	  }
	| {
			type: Action.UPDATE_COMPONENT;
			payload: { pageId: string; id: string; fields: IFillable<any> };
	  }
	| {
			type: Action.UPDATE_STYLE;
			payload: { id: string; fields: IStyle };
	  }
	| { type: Action.DELETE_WEBSITE }
	| { type: Action.DELETE_PAGE; payload: { id: string } }
	| { type: Action.DELETE_COMPONENT; payload: { pageId: string; id: string; componentId: string } };

const fn: Reducer<any, ActionType> = (state: IStructure, action: ActionType) => {
	let newPages: IPages;
	let newStyles: IStyles;
	let newComponents: IComponents;

	switch (action.type) {
		case Action.SET_WEBSITE:
			return {
				...action.payload
			};

		case Action.ADD_PAGE:
			return {
				...state,
				pages: { ...state.pages, [action.payload.id]: action.payload.page }
			};

		case Action.ADD_COMPONENT:
			newPages = { ...state.pages };

			newPages[action.payload.pageId].components = {
				...newPages[action.payload.pageId].components,
				[action.payload.id]: action.payload.component
			};

			newStyles = { ...state.styles };

			if (!Object.keys(newStyles).includes(Object.keys(action.payload.style)[0])) {
				newStyles = {
					...newStyles,
					...action.payload.style
				};
			}

			return {
				...state,
				pages: newPages,
				styles: newStyles
			};

		case Action.UPDATE_WEBSITE:
			return {
				...state,
				...action.payload
			};

		case Action.UPDATE_PAGE:
			newPages = { ...state.pages };

			newPages[action.payload.id] = {
				...newPages[action.payload.id],
				...action.payload.content
			};

			return {
				...state,
				pages: newPages
			};

		case Action.UPDATE_COMPONENT:
			newPages = { ...state.pages };

			newPages[action.payload.pageId].components[action.payload.id].content = {
				...newPages[action.payload.pageId].components[action.payload.id].content,
				...action.payload.fields
			};

			return {
				...state,
				pages: newPages
			};

		case Action.UPDATE_STYLE:
			newStyles = { ...state.styles };

			newStyles[action.payload.id] = {
				...newStyles[action.payload.id],
				...action.payload.fields
			};

			return {
				...state,
				styles: newStyles
			};

		case Action.DELETE_WEBSITE:
			return null;

		case Action.DELETE_PAGE:
			newPages = { ...state.pages };

			delete newPages[action.payload.id];

			return {
				...state,
				pages: newPages
			};

		case Action.DELETE_COMPONENT:
			newPages = { ...state.pages };

			newComponents = { ...newPages[action.payload.pageId].components };

			delete newComponents[action.payload.id];

			newPages[action.payload.pageId].components = newComponents;

			newStyles = { ...state.styles };

			Object.keys(newPages).map((pageId) => {
				Object.keys(newPages[pageId].components).map((id) => {
					if (newPages[pageId].components[id].id === action.payload.componentId) {
						delete newStyles[action.payload.componentId];
					}
				});
			});

			return {
				...state,
				pages: newPages,
				styles: newStyles
			};

		default:
			throw new Error('Could not identify the action! Please, check for misspellings!');
	}
};

export default fn;
