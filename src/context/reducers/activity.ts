import { Reducer } from 'react';

import { IUser } from 'interfaces';
import { Action } from 'context/actions/activity';

export type ActionType =
	| { type: Action.SET_ACTIVE_PAGE; payload: { activePage: number } }
	| { type: Action.SET_ACTIVE_COMPONENT; payload: { activeComponent: number } }
	| { type: Action.SET_NEW_PAGE; payload: { newPage: boolean } }
	| { type: Action.SET_NEW_COMPONENT; payload: { newComponent: boolean } }
	| { type: Action.DELETE_ACTIVE_PAGE }
	| { type: Action.DELETE_ACTIVE_COMPONENT };

const fn: Reducer<any, ActionType> = (state: IUser, action: ActionType) => {
	switch (action.type) {
		case Action.SET_ACTIVE_PAGE:
			return {
				activePage: action.payload.activePage,
				activeComponent: null,
				newPage: false,
				newComponent: false
			};

		case Action.SET_ACTIVE_COMPONENT:
			return {
				...state,
				activeComponent: action.payload.activeComponent,
				newComponent: false
			};

		case Action.SET_NEW_PAGE:
			return {
				activePage: null,
				activeComponent: null,
				newPage: action.payload.newPage,
				newComponent: false
			};

		case Action.SET_NEW_COMPONENT:
			return {
				...state,
				activeComponent: null,
				newComponent: action.payload.newComponent
			};

		case Action.DELETE_ACTIVE_PAGE:
			return {
				activePage: null,
				activeComponent: null,
				newPage: false,
				newComponent: false
			};

		case Action.DELETE_ACTIVE_COMPONENT:
			return {
				...state,
				activeComponent: null
			};

		default:
			throw new Error('Could not identify the action! Please, check for misspellings!');
	}
};

export default fn;
