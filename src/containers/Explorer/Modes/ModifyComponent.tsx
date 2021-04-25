import React, { useState } from 'react';

import { DeleteRounded, FormatPaintRounded, TextFieldsRounded } from '@material-ui/icons';
import { IAction, IBar, IAccordion, IValue, IError } from 'interfaces';

import Hierarchy from 'components/Hierarchy/Hierarchy';
import Form from 'containers/Form/Form';

import classes from './Modes.module.scss';

interface Props {
	onDismiss: () => void;
}

const contentForm: IAccordion[] = [
	{
		name: 'Text',
		fields: [
			{
				name: 'title',
				type: 'text',
				placeholder: 'Welcome to our website!',
				label: 'Title',
				rules: {
					required: true
				}
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
		name: 'Extra',
		fields: [
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

const stylesForm: IAccordion[] = [
	{
		name: 'Title',
		fields: [
			{
				name: 'fontFamily',
				type: 'dropdown',
				placeholder: 'Select a font family..',
				label: 'Font Family',
				options: [
					{
						value: 1,
						label: 'Montserrat'
					},
					{
						value: 2,
						label: 'Raleway'
					},
					{
						value: 3,
						label: 'Open Sans'
					},
					{
						value: 4,
						label: 'Poppins'
					},
					{
						value: 5,
						label: 'Nunito'
					}
				],
				rules: {
					required: true
				}
			},
			{
				name: 'color',
				type: 'color',
				label: 'Color',
				placeholder: 'Select a color..',
				defaultValue: '#34495e',
				presets: [
					{
						value: '#ecf0f1',
						label: 'primary'
					},
					{
						value: '#bdc3c7',
						label: 'secondary'
					},
					{
						value: '#6b7884',
						label: 'third'
					},
					{
						value: '#34495e',
						label: 'fourth'
					},
					{
						value: '#2c3e50',
						label: 'fifth'
					}
				],
				options: {
					// withAlpha: true
				},
				rules: {
					required: true,
					isHex: true
				}
			},
			{
				name: 'fontSize',
				type: 'slider',
				label: 'Font Size',
				defaultValue: 1.5,
				marks: {
					0.75: 'sm',
					1.5: 'md',
					2.5: 'lg'
				},
				options: {
					step: 0.25,
					min: 0.5,
					max: 3,
					withInput: true
				}
			},
			{
				name: 'fontWeight',
				type: 'slider',
				label: 'Font Weight',
				marks: {
					200: 'thin',
					400: 'normal',
					800: 'bold'
				},
				options: {
					step: 100,
					min: 100,
					max: 900
				}
			}
		]
	}
];

const ModifyComponent: React.FC<Props> = ({ onDismiss }) => {
	const [fields, setFields] = useState<IValue>({});
	const [errors, setErrors] = useState<IError>({});

	const [activeBar, setActiveBar] = useState<number>(1);

	let content: React.ReactNode = null;
	let heading: string = '';
	let actions: IAction[] | null = null;

	const onDeletePage = () => {
		console.log('Deleted.');
	};

	const bars: IBar[] = [
		{
			id: 1,
			icon: <TextFieldsRounded />,
			onClick: () => setActiveBar(1)
		},
		{
			id: 2,
			icon: <FormatPaintRounded />,
			onClick: () => setActiveBar(2)
		},
		{
			id: 3,
			icon: <DeleteRounded />,
			onClick: () => setActiveBar(3)
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

	// TODO: reset values on active bar change w/ useEffect hook

	switch (activeBar) {
		case 1:
			heading = 'Modify Content';
			content = (
				<Form
					data={contentForm}
					onChange={(newState) => setFields((prevState) => ({ ...prevState, ...newState }))}
					values={fields}
					onErrors={setErrors}
					errors={errors}
				/>
			);
			break;

		case 2:
			heading = 'Modify Styles';
			content = (
				<Form
					data={stylesForm}
					onChange={(newState) => setFields((prevState) => ({ ...prevState, ...newState }))}
					values={fields}
					onErrors={setErrors}
					errors={errors}
				/>
			);
			break;

		case 3:
			heading = 'Delete Component';
			content = (
				<div className={classes.Wrapper}>
					<h2 className={classes.Heading}>
						Are you sure you want to delete this component? This action cannot be undone.
					</h2>
				</div>
			);
			actions = deleteActions;
			break;

		default:
			break;
	}

	return <Hierarchy heading={heading} bars={bars} content={content} actions={actions} activeBar={activeBar} />;
};

export default ModifyComponent;
