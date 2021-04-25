import React, { createContext, useReducer } from 'react';

import { IActivity } from 'interfaces/activity';

import activityReducer, { ActionType } from '../reducers/activity';
import activityInitialState from '../initialstates/activity';

interface Store {
	state: IActivity;
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
