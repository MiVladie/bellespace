import React, { useState } from 'react';

import { AddRounded, RemoveRounded } from '@material-ui/icons';
import { containsErrors } from 'util/validation';
import { IAccordion, IField } from 'interfaces';

import Accordion from 'components/ui/Accordion/Accordion';
import Input from 'components/ui/Input/Input';

import classes from './Form.module.scss';

interface Value {
	[key: string]: string;
}

interface Props {
	className?: string;
	data: IAccordion[];
	hasErrors: (value: boolean) => void;
}

const Form: React.FC<Props> = ({ className, data, hasErrors }) => {
	const [expanded, setExpanded] = useState<number[]>([0]);
	const [values, setValues] = useState<Value>({});
	const [errors, setErrors] = useState<Value>({});

	const onExpandClick = (id: number) => {
		if (expanded.includes(id)) {
			setExpanded(expanded.filter((e) => e !== id));

			return;
		}

		setExpanded([...expanded, id]);
	};

	const onFocus = (name: string) => {
		if (name in errors) {
			const newErrors = { ...errors };

			delete newErrors[name];

			setErrors(newErrors);
		}
	};

	const onChange = (value: string, name: string) => {
		setValues({ ...values, [name]: value });
	};

	const onBlur = (field: IField) => {
		if (!field.rules) {
			return;
		}

		const error = containsErrors(values[field.name], field.rules);

		if (error) {
			setErrors((prevState) => ({ ...prevState, [field.name]: error }));
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
						{item.fields.map((field) => (
							<Input
								name={field.name}
								type={field.type}
								placeholder={field.placeholder}
								prefix={field.prefix}
								label={field.label}
								onFocus={() => onFocus(field.name)}
								onChange={(val) => onChange(val, field.name)}
								onBlur={() => onBlur(field)}
								value={values[field.name] || ''}
								info={field.info}
								error={errors[field.name]}
								key={field.name}
							/>
						))}
					</Accordion>
				</div>
			))}
		</div>
	);
};

export default Form;
