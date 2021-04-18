import React, { createContext, useReducer } from 'react';

import activityReducer, { ActionType } from '../reducers/activity';
import activityInitialState from '../initialstates/activity';

interface StateContext {
	activePage: number | null;
	activeComponent: number | null;
	newPage: boolean;
	newComponent: boolean;
}

interface Store {
	state: StateContext;
	dispatch: React.Dispatch<ActionType>;
}

export const ActivityContext = createContext<Store>({
	state: activityInitialState,
	dispatch: () => null
});

export const ActivityProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(activityReducer, activityInitialState);

	return <ActivityContext.Provider value={{ state, dispatch }}>{children}</ActivityContext.Provider>;
};
