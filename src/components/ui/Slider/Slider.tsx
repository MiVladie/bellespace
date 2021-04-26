import React from 'react';

import { ISlider } from 'interfaces/components/slider';
import { HelpOutline } from '@material-ui/icons';

import Dragger from 'rc-slider';
import Tooltip from 'components/ui/Tooltip/Tooltip';
import Input from '../Input/Input';

import 'rc-slider/assets/index.css';
import './Dragger.scss';

import classes from './Slider.module.scss';

const Slider: React.FC<ISlider> = ({ name, label, info, marks, options, onChange, value, dark }) => (
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
					placeholder={options?.min.toString() || '2'}
					onChange={(val) => onChange(+val)}
					value={value.toString()}
					dark={dark}
				/>
			)}
		</div>
	</div>
);

export default Slider;
