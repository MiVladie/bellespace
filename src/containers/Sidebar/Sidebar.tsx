import { AddRounded, DeleteOutline, FormatPaintRounded, FormatSizeRounded, SettingsRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

import classes from './Sidebar.module.scss';

type Module = 'page' | 'component';

type Type = 'new' | 'content' | 'styles' | 'delete' | 'settings';

interface Action {
	type: Type;
	heading: string;
	icon: React.ReactNode;
}

interface Props {
	visible: boolean;
	module: Module | null;
	action: Type | null;
	onSelectAction: (type: Type) => void;
}

const Sidebar: React.FC<Props> = ({ visible, module, action, onSelectAction }) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	useEffect(() => {
		setExpanded(false);
	}, [visible]);

	const establishActions = (): Action[] => {
		let actions: Action[] = [];

		if (action === 'new') {
			switch (module) {
				case 'page':
					actions = [
						{
							type: 'new',
							heading: 'New Page',
							icon: <AddRounded className={classes.Icon} />
						}
					];
					break;

				case 'component':
					actions = [
						{
							type: 'new',
							heading: 'New Component',
							icon: <AddRounded className={classes.Icon} />
						}
					];
					break;

				default:
					if (!!module) {
						throw new Error(`Could not establish the ${module} module! Please, check for misspellings!`);
					}
					break;
			}

			return actions;
		}

		switch (module) {
			case 'page':
				actions = [
					{
						type: 'content',
						heading: 'Modify Page',
						icon: <FormatSizeRounded className={classes.Icon} />
					},
					{
						type: 'delete',
						heading: 'Delete Page',
						icon: <DeleteOutline className={classes.Icon} />
					},
					{
						type: 'settings',
						heading: 'Settings',
						icon: <SettingsRounded className={classes.Icon} />
					}
				];
				break;

			case 'component':
				actions = [
					{
						type: 'content',
						heading: 'Modify Component',
						icon: <FormatSizeRounded className={classes.Icon} />
					},
					{
						type: 'styles',
						heading: 'Modify Styles',
						icon: <FormatPaintRounded className={classes.Icon} />
					},
					{
						type: 'delete',
						heading: 'Delete Component',
						icon: <DeleteOutline className={classes.Icon} />
					},
					{
						type: 'settings',
						heading: 'Settings',
						icon: <SettingsRounded className={classes.Icon} />
					}
				];
				break;

			default:
				if (!!module) {
					throw new Error(`Could not establish the ${module} module! Please, check for misspellings!`);
				}
				break;
		}

		return actions;
	};

	let actions: Action[] = establishActions();

	return (
		<div className={[classes.Sidebar, !visible ? classes.Hidden : '', expanded ? classes.Expanded : ''].join(' ')}>
			<div className={classes.Header}>
				<span className={classes.Indicator} />

				<h1 className={classes.Heading}>
					{(actions && actions.length && actions.find((a) => a.type === action)!.heading) || ''}
				</h1>

				<div className={classes.Referrer}>
					<i className={classes.Logo} />
				</div>
			</div>

			<div className={classes.Wrapper}>
				<div className={classes.Content}></div>

				<div className={classes.Bar}>
					<div className={classes.Main}>
						{actions.map((act) => (
							<div
								className={[classes.Action, action === act.type ? classes.SelectedAction : ''].join(
									' '
								)}
								onClick={() => onSelectAction(act.type)}>
								{act.icon}
							</div>
						))}
					</div>

					<div className={classes.Extra}></div>
				</div>
			</div>

			<div className={classes.Toggle} onClick={() => setExpanded((prevState) => !prevState)}>
				<div className={classes.Hook} />
			</div>
		</div>
	);
};

export default Sidebar;
