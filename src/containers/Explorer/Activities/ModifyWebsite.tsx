import React, { useContext, useEffect, useState } from 'react';

import { IBar } from 'interfaces/hierarchy';
import { TError } from 'interfaces/validaton';
import { WEBSITE_CATEGORIES } from 'constants/website';
import { Action } from 'context/actions/website';
import { IFolder } from 'interfaces/components/folder';
import { WebsiteContext } from 'context/providers/website';
import { SettingsRounded } from '@material-ui/icons';

import useDidUpdateEffect from 'hooks/render';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import Folders from 'containers/Folders/Folders';
import { hasChanged } from 'util/validation';

interface IContent {
	setFields: (e: IForm) => void;
	setErrors: (e: TError<IForm>) => void;
	fields: IForm;
	errors: TError<IForm>;
}

interface IBars {
	onClick: (id: number) => void;
}

interface IForm {
	name: string;
	category: number;
	description?: string;
}

const getBars = ({ onClick }: IBars): IBar[] => {
	return [
		{
			id: 1,
			icon: <SettingsRounded />,
			onClick: () => onClick(1)
		}
	];
};

const getContent = ({ setFields, setErrors, fields, errors }: IContent): React.ReactNode => {
	const modifyData: IFolder[] = [
		{
			name: 'General',
			fields: [
				{
					name: 'name',
					type: 'text',
					placeholder: 'Type something..',
					label: 'Name',
					info: 'The name of your project.',
					rules: {
						required: true
					},
					value: fields.name,
					error: errors.name
				},
				{
					name: 'category',
					type: 'dropdown',
					placeholder: 'Select a category..',
					label: 'Category',
					info: 'The category of your project.',
					options: WEBSITE_CATEGORIES,
					rules: {
						required: true
					},
					value: fields.category || null,
					error: errors.category
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
					label: 'Description',
					value: fields.description || '',
					error: errors.description
				}
			]
		}
	];

	return (
		<Folders
			data={modifyData}
			onValues={setFields}
			onErrors={setErrors}
			values={fields}
			errors={errors}
			instantValidation
		/>
	);
};

const ModifyPage: React.FC = () => {
	const [fields, setFields] = useState<IForm>({ name: '', category: 1 });
	const [errors, setErrors] = useState<TError<IForm>>({});

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	useEffect(() => {
		initializeContent();
	}, []);

	useDidUpdateEffect(() => {
		updateFields();
	}, [fields]);

	const initializeContent = () => {
		const newFields: IForm = {
			name: state!.name,
			category: state!.category,
			description: state!.description
		};

		setFields(newFields);
		setErrors({});
	};

	const updateFields = () => {
		// Initializing updated fields
		const data: IForm = { ...fields };

		if (!hasChanged(['name', 'category', 'description'], state, data)) {
			return;
		}

		// Assigning all of the fields without errors
		Object.keys(fields).forEach((key) => {
			if (key in errors) {
				delete data[key as keyof IForm];
			}
		});

		// Saving to the global store
		dispatch({
			type: Action.UPDATE_WEBSITE,
			payload: {
				...data
			}
		});
	};

	return (
		<Hierarchy
			heading='Modify Website'
			activeBar={active}
			content={getContent({
				setFields,
				setErrors,
				fields,
				errors
			})}
			bars={getBars({ onClick: setActive })}
		/>
	);
};

export default ModifyPage;
