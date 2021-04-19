import React, { useState } from 'react';

import { AddRounded } from '@material-ui/icons';
import { IAction, IBar } from 'interfaces/activities';
import { IAccordion } from 'interfaces';

import Hierarchy from 'components/Hierarchy/Hierarchy';
import Form from 'containers/Form/Form';

import classes from './NewPage.module.scss';

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
			name: 'Content',
			type: 'accordion',
			fields: [
				{
					name: 'name',
					type: 'text',
					placeholder: 'About',
					label: 'Name'
				},
				{
					name: 'description',
					type: 'textarea',
					placeholder: 'Type something..',
					label: 'Description'
				}
			]
		},
		{
			name: 'Links',
			type: 'accordion',
			fields: [
				{
					name: 'url',
					type: 'text',
					placeholder: 'about',
					label: 'URL',
					prefix: '/'
				},
				{
					name: 'scroll',
					type: 'text',
					placeholder: 'introduction',
					label: 'Scroll To',
					prefix: '#'
				}
			]
		}
	];

	const content = <Form data={form} hasErrors={setHasErrors} />;

	return <Hierarchy heading='New Page' bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default NewPage;
