import React, { useState } from 'react';

import { AddRounded } from '@material-ui/icons';
import { IAction, IBar } from 'interfaces/activities';
import { IAccordion } from 'interfaces';

import Hierarchy from 'components/Hierarchy/Hierarchy';
import Form from 'containers/Form/Form';

interface Props {
	onDismiss: () => void;
}

const NewPage: React.FC<Props> = ({ onDismiss }) => {
	const [activeBar, setActiveBar] = useState<number>(1);
	const [hasErrors, setHasErrors] = useState<boolean>(false);

	const bars: IBar[] = [
		{
			id: 1,
			icon: <AddRounded />,
			onClick: () => setActiveBar(1)
		}
	];

	const actions: IAction[] = [
		{
			id: 1,
			name: 'Add',
			onClick: () => null
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: onDismiss
		}
	];

	const form: IAccordion[] = [
		{
			name: 'General',
			fields: [
				{
					name: 'name',
					type: 'text',
					placeholder: 'About',
					label: 'Name',
					info: 'The name of the webpage.',
					rules: {
						required: true
					}
				},
				{
					name: 'url',
					type: 'text',
					placeholder: 'about',
					label: 'URL',
					info: 'The route name of the web page. Route will be displayed at the end of the website link.',
					prefix: '/',
					rules: {
						required: true,
						isRoute: true
					}
				}
			]
		},
		{
			name: 'Extra',
			fields: [
				{
					name: 'description',
					type: 'textarea',
					placeholder: 'Type something..',
					label: 'Description'
				}
			]
		}
	];

	const content = <Form data={form} hasErrors={setHasErrors} />;

	return <Hierarchy heading='New Page' bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default NewPage;
