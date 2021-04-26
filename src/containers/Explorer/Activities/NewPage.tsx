import React, { useContext, useState } from 'react';

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
	setErrors: (e: IError) => void;
	fields: IForm;
	errors: IError;
}

interface IActions {
	errors: IError;
	onSubmit: () => void;
	onDismiss: () => void;
}

interface IForm {
	name: string;
	route: string;
	description?: string;
}

type IError = {
	[key in keyof IForm]?: string;
};

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
	const takenRoutes = pages.map((page) => page.url);

	const data: IFolder[] = [
		{
			name: 'General',
			fields: [
				{
					name: 'name',
					type: 'text',
					placeholder: 'About',
					label: 'Name',
					info: 'The name of the webpage',
					rules: {
						required: true,
						custom: (value) => {
							if (takenNames.includes(value)) {
								return 'The name is already taken!';
							}

							return false;
						}
					},
					onChange: (e: string) => setFields({ ...fields, name: e }),
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
						custom: (value) => {
							if (takenRoutes.includes(value)) {
								return 'The route name is already taken!';
							}

							return false;
						}
					},
					onChange: (e: string) => setFields({ ...fields, route: e }),
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
					onChange: (e: string) => setFields({ ...fields, description: e }),
					value: fields.description || ''
				}
			]
		}
	];

	return <Folders data={data} onChange={setFields} onErrors={setErrors} values={fields} errors={errors} />;
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
	const [errors, setErrors] = useState<IError>({});

	const [active, setActive] = useState<number>(1);

	const { state, dispatch } = useContext(WebsiteContext);

	const onSubmit = () => {
		const page: IPage = {
			id: Math.random(),
			name: fields.name,
			url: fields.route,
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
