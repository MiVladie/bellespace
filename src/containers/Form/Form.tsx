import React, { useState } from 'react';

import { AddRounded, RemoveRounded } from '@material-ui/icons';
import { IAccordion } from 'interfaces';

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

	const onExpandClick = (id: number) => {
		if (expanded.includes(id)) {
			setExpanded(expanded.filter((e) => e !== id));

			return;
		}

		setExpanded([...expanded, id]);
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
								onChange={(e) => setValues((prevState) => ({ ...prevState, [field.name]: e }))}
								value={values[field.name]}
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
