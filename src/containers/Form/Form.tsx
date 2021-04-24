import React, { useState } from 'react';

import { AddRounded, RemoveRounded } from '@material-ui/icons';
import { containsErrors } from 'util/validation';
import { IAccordion, IColor, IDropdown, IError, IField, IValue } from 'interfaces';

import Accordion from 'components/ui/Accordion/Accordion';
import Dropdown from 'components/ui/Dropdown/Dropdown';
import Slider from 'components/ui/Slider/Slider';
import Color from 'components/ui/Color/Color';
import Input from 'components/ui/Input/Input';

import classes from './Form.module.scss';

interface Props {
	className?: string;
	data: IAccordion[];
	onChange: (fields: IValue) => void;
	onErrors: (errors: IError) => void;
	values: IValue;
	errors: IError;
}

const Form: React.FC<Props> = ({ className, data, onChange, onErrors, values, errors }) => {
	const [expanded, setExpanded] = useState<number[]>([0]);

	const onExpandClick = (id: number) => {
		if (expanded.includes(id)) {
			setExpanded(expanded.filter((e) => e !== id));

			return;
		}

		setExpanded([...expanded, id]);
	};

	const onInputFocus = (name: string) => {
		if (name in errors) {
			const newErrors = { ...errors };

			delete newErrors[name];

			onErrors(newErrors);
		}
	};

	const onInputChange = (value: string | number, name: string) => {
		onChange({ ...values, [name]: value });
	};

	const onInputBlur = (field: IField | IDropdown | IColor) => {
		if (!field.rules) {
			return;
		}

		const error = containsErrors((values[field.name] || '').toString(), field.rules);

		if (error) {
			onErrors({ ...errors, [field.name]: error });
		}
	};

	return (
		<div className={[classes.Form, className].join(' ')}>
			{data.map((item, index) => (
				<div className={classes.Accordion} key={item.name}>
					<div className={classes.Wrapper} onClick={() => onExpandClick(index)}>
						<h3 className={classes.Name}>{item.name}</h3>

						{expanded.includes(index) ? <RemoveRounded /> : <AddRounded />}
					</div>

					<Accordion className={classes.Content} expanded={expanded.includes(index)}>
						{item.fields.map((field) =>
							field.type === 'dropdown' ? (
								<Dropdown
									name={field.name}
									label={field.label}
									info={field.info}
									options={field.options}
									placeholder={field.placeholder}
									onFocus={() => onInputFocus(field.name)}
									onChange={(val) => onInputChange(val, field.name)}
									onBlur={() => onInputBlur(field)}
									value={values[field.name] as number}
									error={errors[field.name]}
									key={field.name}
								/>
							) : field.type === 'slider' ? (
								<Slider
									name={field.name}
									defaultValue={field.defaultValue}
									marks={field.marks}
									label={field.label}
									info={field.info}
									options={field.options}
									onChange={(val) => onInputChange(val, field.name)}
									value={+values[field.name]}
									key={field.name}
								/>
							) : field.type === 'color' ? (
								<Color
									name={field.name}
									label={field.label}
									info={field.info}
									defaultValue={field.defaultValue}
									placeholder={field.placeholder}
									presets={field.presets}
									options={field.options}
									onFocus={() => onInputFocus(field.name)}
									onChange={(val) => onInputChange(val, field.name)}
									onBlur={() => onInputBlur(field)}
									value={values[field.name] as string}
									error={errors[field.name]}
									key={field.name}
								/>
							) : (
								<Input
									name={field.name}
									type={field.type}
									placeholder={field.placeholder}
									prefix={field.prefix}
									label={field.label}
									onFocus={() => onInputFocus(field.name)}
									onChange={(val) => onInputChange(val, field.name)}
									onBlur={() => onInputBlur(field)}
									value={values[field.name] || ''}
									info={field.info}
									error={errors[field.name]}
									key={field.name}
								/>
							)
						)}
					</Accordion>
				</div>
			))}
		</div>
	);
};

export default Form;
