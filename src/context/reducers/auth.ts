import { Reducer } from 'react';

import { IUser } from 'interfaces';
import { Action } from 'context/actions/auth';

export type ActionType =
	| { type: Action.SET_AUTH; payload: { user: IUser; token: string | null } }
	| { type: Action.UPDATE_AUTH; payload: { user: IUser; token: string | null } }
	| { type: Action.DELETE_AUTH };

const fn: Reducer<any, ActionType> = (state: IUser, action: ActionType) => {
	switch (action.type) {
		case Action.SET_AUTH:
			return {
				user: action.payload.user,
				token: action.payload.token
			};

		case Action.UPDATE_AUTH:
			return {
				user: {
					...state,
					...action.payload.user
				},
				token: action.payload.token
			};

		case Action.DELETE_AUTH:
			return {
				user: null,
				token: null
			};

		default:
			throw new Error('Could not identify the action! Please, check for misspellings!');
	}
};

export default fn;
