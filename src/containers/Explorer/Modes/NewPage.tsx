import React, { useState } from 'react';

import { AddRounded } from '@material-ui/icons';
import { IAction, IBar, IError, IValidatable } from 'interfaces';
import { IAccordion } from 'interfaces';
import { containsErrorsInSet } from 'util/validation';

import Hierarchy from 'components/Hierarchy/Hierarchy';
import Form from 'containers/Form/Form';

interface Website {
	name: string;
	url: string;
	description?: string;
}

interface Page {
	id: number;
	name: string;
	url: string;
}

interface Props {
	pages: Page[];
	onAdd: (fields: Website) => void;
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

const NewPage: React.FC<Props> = ({ pages, onAdd, onDismiss }) => {
	const [fields, setFields] = useState<Website>({ name: '', url: '' });
	const [errors, setErrors] = useState<IError>({});

	const [activeBar, setActiveBar] = useState<number>(1);

	const onSubmit = () => {
		const values = mapFieldsToValidatable();

		const errors = containsErrorsInSet(values);

		if (Object.keys(errors).length) {
			setErrors(errors);

			return;
		}

		onAdd(fields);
	};

	const mapFieldsToValidatable = (): IValidatable[] => {
		const values: IValidatable[] = [];

		for (const fieldset of getForm(pages)) {
			for (const field of fieldset.fields) {
				if (field.type !== 'dropdown' && field.type !== 'slider') {
					values.push({
						name: field.name,
						value: fields[field.name as keyof Website] as string,
						rules: field.rules
					});
				}
			}
		}

		return values;
	};

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
			onClick: onSubmit
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: onDismiss
		}
	];

	const content = (
		<Form data={getForm(pages)} onChange={setFields} values={fields} onErrors={setErrors} errors={errors} />
	);

	return <Hierarchy heading='New Page' bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default NewPage;
