import React, { useState } from 'react';

import { AddRounded, RemoveRounded } from '@material-ui/icons';
import { IAccordion } from 'interfaces';

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

	return (
		<div className={[classes.Form, className].join(' ')}>
			{data.map((item, index) => (
				<div
					className={[classes.Accordion, expanded.includes(index) ? classes.Expanded : null].join(' ')}
					key={item.name}>
					<div
						className={classes.Wrapper}
						onClick={() =>
							setExpanded(
								expanded.includes(index) ? expanded.filter((e) => e !== index) : [...expanded, index]
							)
						}>
						<h3 className={classes.Name}>{item.name}</h3>
						{expanded.includes(index) ? <RemoveRounded /> : <AddRounded />}
					</div>

					<div className={classes.Content}>
						{item.fields.map((field) => (
							<Input
								name={field.name}
								type={field.type}
								placeholder={field.placeholder}
								prefix={field.prefix}
								label={field.label}
								onChange={(e) => setValues((prevState) => ({ ...prevState, [field.name]: e }))}
								value={values[field.name]}
								key={field.name}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Form;
