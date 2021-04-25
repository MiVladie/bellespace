import React, { useContext } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { WebsiteContext } from 'context/providers/website';

import { Action as ActivityAction } from 'context/actions/activity';
import { Action as WebsiteAction } from 'context/actions/website';

import { IPage } from 'interfaces/blueprint';

import Sidebar from 'hoc/Sidebar/Sidebar';

import NewPage from './Modes/NewPage';
import NewComponent from './Modes/NewComponent';
import ModifyPage from './Modes/ModifyPage';
import ModifyComponent from './Modes/ModifyComponent';

interface Page {
	name: string;
	url: string;
	description?: string;
}

const Explorer: React.FC = () => {
	const { state: stateActivity, dispatch: dispatchActivity } = useContext(ActivityContext);
	const { state: stateWebsite, dispatch: dispatchWebsite } = useContext(WebsiteContext);

	const onNewPage = ({ name, url, description }: Page) => {
		const page: IPage = {
			id: Math.random(),
			components: [],
			name: name,
			url: '/' + url,
			description: description
		};

		onDismiss();
		dispatchWebsite({ type: WebsiteAction.ADD_PAGE, payload: { page } });
	};

	const onPageChange = ({ name, url, description }: Page) => {
		dispatchWebsite({
			type: WebsiteAction.UPDATE_PAGE,
			payload: { pageId: stateActivity.activePage!, name: name, url: '/' + url, description: description }
		});
	};

	const onDeletePage = () => {
		onDismiss();
		dispatchWebsite({ type: WebsiteAction.DELETE_PAGE, payload: { pageId: stateActivity.activePage! } });
	};

	const onDismiss = () => {
		if (stateActivity.newComponent) {
			dispatchActivity({ type: ActivityAction.SET_NEW_COMPONENT, payload: { newComponent: false } });
		} else if (stateActivity.newPage) {
			dispatchActivity({ type: ActivityAction.SET_NEW_PAGE, payload: { newPage: false } });
		} else if (stateActivity.activeComponent) {
			dispatchActivity({ type: ActivityAction.DELETE_ACTIVE_COMPONENT });
		} else {
			dispatchActivity({ type: ActivityAction.DELETE_ACTIVE_PAGE });
		}
	};

	let content;

	if (stateActivity.newComponent) {
		content = <NewComponent onDismiss={onDismiss} />;
	} else if (stateActivity.newPage) {
		content = (
			<NewPage
				pages={stateWebsite!.pages.map((page) => ({
					id: page.id,
					name: page.name,
					url: page.url
				}))}
				onAdd={onNewPage}
				onDismiss={onDismiss}
			/>
		);
	} else if (stateActivity.activeComponent) {
		content = <ModifyComponent onDismiss={onDismiss} />;
	} else if (stateActivity.activePage) {
		content = (
			<ModifyPage
				page={stateWebsite!.pages.find((p) => p.id === stateActivity.activePage)!}
				pages={stateWebsite!.pages.map((page) => ({
					id: page.id,
					name: page.name,
					url: page.url
				}))}
				onChange={onPageChange}
				onDelete={onDeletePage}
				onDismiss={onDismiss}
			/>
		);
	}

	return (
		<Sidebar visible={!!content} reverse>
			{content}
		</Sidebar>
	);
};

export default Explorer;
