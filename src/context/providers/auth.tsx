import React, { createContext, useReducer } from 'react';

import { IUser } from 'interfaces';

import authReducer, { ActionType } from '../reducers/auth';
import authInitialState from '../initialstates/auth';

interface StateContext {
	user: IUser | null;
	token: string | null;
}

interface Store {
	state: StateContext;
	dispatch: React.Dispatch<ActionType>;
}

export const AuthContext = createContext<Store>({
	state: authInitialState,
	dispatch: () => null
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(authReducer, authInitialState);

	return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
