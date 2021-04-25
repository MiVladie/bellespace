import React, { createContext, useReducer } from 'react';

import { IStructure } from 'interfaces/blueprint';

import websiteReducer, { ActionType } from '../reducers/website';
import websiteInitialState from '../initialstates/website';

interface Store {
	state: IStructure | null;
	dispatch: React.Dispatch<ActionType>;
}

export const WebsiteContext = createContext<Store>({
	state: websiteInitialState,
	dispatch: () => null
});

export const WebsiteProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(websiteReducer, websiteInitialState);

	return <WebsiteContext.Provider value={{ state, dispatch }}>{children}</WebsiteContext.Provider>;
};
