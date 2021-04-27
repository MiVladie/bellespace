import React, { useContext, useState } from 'react';

import { TError } from 'interfaces/validaton';
import { IAction, IBar } from 'interfaces/hierarchy';
import { Action } from 'context/actions/website';
import { WebsiteContext } from 'context/providers/website';
import { IFolder } from 'interfaces/components/folder';
import { AddRounded } from '@material-ui/icons';
import { IPage } from 'interfaces/website';

import Hierarchy from 'containers/Explorer/Hierarchy/Hierarchy';
import Folders from 'containers/Folders/Folders';

interface IContent {
	pages: IPage[];
	setFields: (e: IForm) => void;
	setErrors: (e: TError<IForm>) => void;
	fields: IForm;
	errors: TError<IForm>;
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

const getContent = ({ pages, setFields, setErrors, fields, errors }: IContent): React.ReactNode => {
	const takenNames = pages.map((page) => page.name);
	const takenRoutes = pages.map((page) => page.route);

	const data: IFolder[] = [
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
					},
					value: fields.name,
					error: errors.name
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
					},
					value: fields.route,
					error: errors.route
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
					value: fields.description || ''
				}
			]
		}
	];

	return <Folders data={data} onValues={setFields} onErrors={setErrors} values={fields} errors={errors} />;
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

	const onSubmit = () => {
		const page: IPage = {
			id: Math.random(),
			name: fields.name,
			route: fields.route,
			description: fields.description,
			components: []
		};

		onDismiss();

		dispatch({ type: Action.ADD_PAGE, payload: { page } });
	};

	return (
		<Hierarchy
			heading='New Page'
			activeBar={active}
			content={getContent({ pages: state!.pages, setFields, setErrors, fields, errors })}
			bars={getBars(setActive)}
			actions={getActions({ errors, onSubmit, onDismiss })}
		/>
	);
};

export default NewPage;
