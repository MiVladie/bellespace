import React, { useEffect } from 'react';

import { IMark, ISliderOptions } from 'interfaces';
import { HelpOutline } from '@material-ui/icons';

import Dragger from 'rc-slider';
import Tooltip from 'components/ui/Tooltip/Tooltip';
import Input from '../Input/Input';

import 'rc-slider/assets/index.css';
import './Dragger.scss';

import classes from './Slider.module.scss';

interface Props {
	name: string;
	defaultValue?: number;
	label?: string;
	info?: React.ReactNode;
	marks?: IMark;
	options?: ISliderOptions;
	onChange: (value: number) => void;
	value: number;
	dark?: boolean;
}

const Slider: React.FC<Props> = ({ name, defaultValue, label, info, marks, options, onChange, value, dark }) => {
	useEffect(() => {
		if (defaultValue != null) {
			onChange(defaultValue);
		}
	}, []);

	return (
		<div className={classes.Slider} style={marks && { paddingBottom: '0.75rem' }}>
			{label && (
				<label className={classes.Label} htmlFor={name}>
					{label}
					{info && (
						<span className={classes.Info}>
							<HelpOutline />

							<Tooltip className={classes.Tooltip}>{info}</Tooltip>
						</span>
					)}
				</label>
			)}

			<div className={classes.Wrapper}>
				<Dragger
					className={['Dragger', dark ? 'Dark' : null].join(' ')}
					defaultValue={defaultValue || options?.min}
					marks={marks}
					min={options?.min}
					max={options?.max}
					step={options?.step}
					onChange={onChange}
					value={value}
				/>

				{options?.withInput && (
					<Input
						className={classes.Input}
						name='number'
						type='number'
						min={options?.min}
						max={options?.max}
						step={options?.step}
						placeholder={defaultValue?.toString() || options?.min.toString() || '2'}
						onChange={(val) => onChange(+val)}
						value={value || (defaultValue ?? 0)}
						dark={dark}
					/>
				)}
			</div>
		</div>
	);
};

export default Slider;
