import { Reducer } from 'react';

import { User } from 'interfaces';
import { Action } from 'context/actions/user';

export type ActionType =
	| { type: Action.SET_USER; payload: User }
	| { type: Action.UPDATE_USER; payload: User }
	| { type: Action.DELETE_USER };

const fn: Reducer<any, ActionType> = (state: User, action: ActionType) => {
	switch (action.type) {
		case 'SET_USER':
			return { user: { ...action.payload } };

		case 'UPDATE_USER':
			return { user: { ...state, ...action.payload } };

		case 'DELETE_USER':
			return { user: null };

		default:
			throw new Error(`Could not identify the ${action.type} action! Please, check for misspellings!`);
	}
};

export default fn;
