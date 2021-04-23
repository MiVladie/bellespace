import React, { useState } from 'react';

import { AddRounded } from '@material-ui/icons';
import { IAction, IBar, IError, IValidatable, IValue } from 'interfaces';
import { IAccordion } from 'interfaces';
import { containsErrorsInSet } from 'util/validation';

import Hierarchy from 'components/Hierarchy/Hierarchy';
import Form from 'containers/Form/Form';

interface Props {
	onDismiss: () => void;
}

const form: IAccordion[] = [
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
					required: true
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
						if (value === 'about' || value === 'home') {
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

const NewPage: React.FC<Props> = ({ onDismiss }) => {
	const [fields, setFields] = useState<IValue>({});
	const [errors, setErrors] = useState<IError>({});

	const [activeBar, setActiveBar] = useState<number>(1);

	const onSubmit = () => {
		const values = mapFieldsToValidatable();

		const errors = containsErrorsInSet(values);

		if (Object.keys(errors).length) {
			setErrors(errors);

			return;
		}

		console.log({ fields });
	};

	const mapFieldsToValidatable = (): IValidatable[] => {
		const values: IValidatable[] = [];

		form.forEach((fieldset) => {
			fieldset.fields.forEach((field) => {
				if (field.type !== 'dropdown' && field.type !== 'slider') {
					values.push({ name: field.name, value: fields[field.name] as string, rules: field.rules });
				}
			});
		});

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

	const content = <Form data={form} onChange={setFields} values={fields} onErrors={setErrors} errors={errors} />;

	return <Hierarchy heading='New Page' bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default NewPage;
