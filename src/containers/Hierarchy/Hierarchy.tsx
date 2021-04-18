import React from 'react';

import { IAction, IBar } from 'interfaces/activities';

import Button from 'components/ui/Button/Button';

import classes from './Hierarchy.module.scss';

interface Props {
	heading: string;
	content: React.ReactNode;
	bars: IBar[];
	activeBar: number;
	actions?: IAction[];
}

const Hierarchy: React.FC<Props> = ({ heading, content, bars, activeBar, actions }) => (
	<>
		<div className={classes.Header}>
			<span className={classes.Indicator} />

			<h1 className={classes.Title}>{heading}</h1>

			<div className={classes.Referrer}>
				<i className={classes.Logo} />
			</div>
		</div>

		<div className={classes.Body}>
			<div className={classes.Wrapper}>
				<div className={classes.Content}>{content}</div>

				{actions && (
					<div className={classes.Actions}>
						{actions.map((action, index) => (
							<Button onClick={action.onClick} filled={!index} key={action.id}>
								{action.name}
							</Button>
						))}
					</div>
				)}
			</div>

			<div className={classes.Bar}>
				{bars.map((bar) => (
					<div
						className={[classes.Handle, bar.id === activeBar ? classes.SelectedHandle : null].join(' ')}
						onClick={bar.onClick}
						key={bar.id}>
						{bar.icon}
						{bar.label && <small className={classes.Label}>{bar.label}</small>}
					</div>
				))}
			</div>
		</div>
	</>
);

export default Hierarchy;
