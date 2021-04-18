import React, { useContext } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { Action } from 'context/actions/activity';

import Sidebar from 'hoc/Sidebar/Sidebar';

import NewPage from 'containers/Explorer/Modes/NewPage';
import NewComponent from 'containers/Explorer/Modes/NewComponent';
import ModifyPage from 'containers/Explorer/Modes/ModifyPage';
import ModifyComponent from 'containers/Explorer/Modes/ModifyComponent';

const Explorer: React.FC = () => {
	const { state, dispatch } = useContext(ActivityContext);

	const onDismiss = () => {
		if (state.newComponent) {
			dispatch({ type: Action.SET_NEW_COMPONENT, payload: { newComponent: false } });
		} else if (state.newPage) {
			dispatch({ type: Action.SET_NEW_PAGE, payload: { newPage: false } });
		} else if (state.activeComponent) {
			dispatch({ type: Action.DELETE_ACTIVE_COMPONENT });
		}
	};

	let content;

	if (state.newComponent) {
		content = <NewComponent onDismiss={onDismiss} />;
	} else if (state.newPage) {
		content = <NewPage onDismiss={onDismiss} />;
	} else if (state.activeComponent) {
		content = <ModifyComponent />;
	} else if (state.activePage) {
		content = <ModifyPage />;
	}

	return (
		<Sidebar visible={!!content} reverse>
			{content}
		</Sidebar>
	);
};

export default Explorer;
