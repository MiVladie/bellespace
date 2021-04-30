import React, { useContext, useState } from 'react';

import { TError } from 'interfaces/validaton';
import { Action } from 'context/actions/website';
import { IAction, IBar } from 'interfaces/hierarchy';
import { WebsiteContext } from 'context/providers/website';
import { IFolder } from 'interfaces/components/folder';
import { identifyErrors } from 'util/validation';
import { AddRounded } from '@material-ui/icons';
import { IPage } from 'interfaces/website';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import Folders from 'containers/Folders/Folders';

interface IContent {
	pages: IPage[];
}

interface IActions {
	errors: TError<IForm>;
	onSubmit: () => void;
	onDismiss: () => void;
}

interface IForm {
	name: string;
	route: string;
	description?: string;
}

interface Props {
	onDismiss: () => void;
}

const getBars = (onClick: (id: number) => void): IBar[] => {
	return [
		{
			id: 1,
			icon: <AddRounded />,
			onClick: () => onClick(1)
		}
	];
};

const getActions = ({ errors, onSubmit, onDismiss }: IActions): IAction[] => {
	return [
		{
			id: 1,
			name: 'Add',
			onClick: onSubmit,
			disabled: !!Object.keys(errors).length
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: onDismiss
		}
	];
};

const NewPage: React.FC<Props> = ({ onDismiss }) => {
	const [fields, setFields] = useState<IForm>({ name: '', route: '' });
	const [errors, setErrors] = useState<TError<IForm>>({});

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	const getContent = ({ pages }: IContent): IFolder[] => {
		const takenNames = pages.map((page) => page.name);
		const takenRoutes = pages.map((page) => page.route);

		return [
			{
				name: 'General',
				fields: [
					{
						name: 'name',
						type: 'text',
						placeholder: 'About',
						label: 'Name',
						info: "The name of the webpage. Name will be displayed in the browser's tab",
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
						name: 'route',
						type: 'text',
						placeholder: 'about',
						label: 'Route',
						info: 'The route of the web page. Route will be displayed at the end of the website link.',
						prefix: '/',
						rules: {
							required: true,
							isRoute: true,
							custom: (value) => {
								if (takenRoutes.includes(value)) {
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

	const onSubmit = () => {
		const validatableFields = [];

		const folders = getContent({ pages: state!.pages });

		for (const folder of folders) {
			for (const field of folder.fields) {
				if (field.rules) {
					validatableFields.push({
						name: field.name,
						rules: field.rules,
						value: fields[field.name as keyof IForm]
					});
				}
			}
		}

		const newErrors = identifyErrors(validatableFields);

		if (Object.keys(newErrors).length) {
			setErrors(newErrors);

			return;
		}

		const page: IPage = {
			id: Math.random(),
			name: fields.name,
			route: fields.route,
			description: fields.description,
			components: []
		};

		dispatch({ type: Action.ADD_PAGE, payload: { page } });

		onDismiss();
	};

	return (
		<Hierarchy
			heading='New Page'
			activeBar={active}
			content={
				<Folders
					data={getContent({ pages: state!.pages })}
					onValues={setFields}
					onErrors={setErrors}
					values={fields}
					errors={errors}
				/>
			}
			bars={getBars(setActive)}
			actions={getActions({ errors, onSubmit, onDismiss })}
		/>
	);
};

export default NewPage;
