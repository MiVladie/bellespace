import React, { useState } from 'react';

import { DeleteRounded, TextFieldsRounded } from '@material-ui/icons';
import { IAccordion, IError, IValue, IBar, IAction } from 'interfaces';

import Hierarchy from 'components/Hierarchy/Hierarchy';
import Form from 'containers/Form/Form';

import classes from './Modes.module.scss';

interface Page {
	name: string;
	url: string;
	description?: string;
}

interface Props {
	page: Page;
	pages: Page[];
	onDelete: () => void;
	onChange: (fields: Page) => void;
	onDismiss: () => void;
}

const getForm = (pages: Page[]): IAccordion[] => {
	const takenNames: string[] = pages.map((page) => page.name);
	const takenUrl: string[] = pages.map((page) => page.url);

	return [
		{
			name: 'General',
			fields: [
				{
					name: 'name',
					type: 'text',
					placeholder: 'About',
					label: 'Name',
					info: 'The name of the web page.',
					rules: {
						required: true,
						custom: (value) => {
							if (takenNames.includes(value)) {
								return 'The name is already taken!';
							}

							return false;
						}
					}
				},
				{
					name: 'url',
					type: 'text',
					placeholder: 'about',
					label: 'URL',
					info: 'The route of the web page. Route will be displayed at the end of the website link.',
					prefix: '/',
					rules: {
						required: true,
						isRoute: true,
						custom: (value) => {
							if (takenUrl.includes(value)) {
								return 'The route name is already taken!';
							}

							return false;
						}
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
};

const ModifyPage: React.FC<Props> = ({ page, pages, onChange, onDelete, onDismiss }) => {
	const [fields, setFields] = useState<Page>({
		name: page.name,
		url: page.url.replace('/', ''),
		description: page.description
	});
	const [errors, setErrors] = useState<IError>({});

	const [activeBar, setActiveBar] = useState<number>(1);

	const onPageChange = (e: Page) => {
		setFields(e);

		onChange(e);
	};

	const onDeletePage = () => {
		onDelete();
	};

	const bars: IBar[] = [
		{
			id: 1,
			icon: <TextFieldsRounded />,
			onClick: () => setActiveBar(1)
		},
		{
			id: 2,
			icon: <DeleteRounded />,
			onClick: () => setActiveBar(2)
		}
	];

	const deleteActions: IAction[] = [
		{
			id: 1,
			name: 'Delete',
			onClick: onDeletePage
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: onDismiss
		}
	];

	let content = null;
	let actions = null;
	let heading = '';

	switch (activeBar) {
		case 1:
			content = (
				<Form
					data={getForm(pages)}
					onChange={onPageChange}
					values={fields}
					onErrors={setErrors}
					errors={errors}
				/>
			);
			heading = 'Modify Page';
			break;

		case 2:
			content = (
				<div className={classes.Wrapper}>
					<h2 className={classes.Heading}>
						Are you sure you want to delete this page? This action cannot be undone.
					</h2>
				</div>
			);
			actions = deleteActions;
			heading = 'Delete Page';
			break;

		default:
			break;
	}

	return <Hierarchy heading={heading} bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default ModifyPage;
