import React, { createContext, useReducer } from 'react';

import { User } from 'interfaces';

import userReducer, { ActionType } from '../reducers/user';
import userInitialState from '../initialstates/user';

interface StateContext {
	user: User | null;
}

interface Store {
	state: StateContext;
	dispatch: React.Dispatch<ActionType>;
}

export const UserContext = createContext<Store>({
	state: userInitialState,
	dispatch: () => null
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(userReducer, userInitialState);

	return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
