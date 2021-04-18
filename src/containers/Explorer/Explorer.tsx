import React, { useContext, useState } from 'react';

import { CollectionsRounded, GroupRounded, StorageRounded, WallpaperRounded } from '@material-ui/icons';
import { ActivityContext } from 'context/providers/activity';

import Sidebar from 'hoc/Sidebar/Sidebar';
import Button from 'components/ui/Button/Button';

import classes from './Explorer.module.scss';

const Explorer: React.FC = () => {
	const [selectedHandle, setSelectedHandle] = useState<number | undefined>();

	const { state, dispatch } = useContext(ActivityContext);

	const actions = [
		{
			id: 1,
			name: 'Add',
			onClick: () => null
		},
		{
			id: 2,
			name: 'Cancel',
			onClick: () => null
		}
	];

	const bars = [
		{
			id: 1,
			onClick: () => null,
			icon: <WallpaperRounded />,
			label: 'Banner'
		},
		{
			id: 2,
			onClick: () => null,
			icon: <GroupRounded />,
			label: 'Introduction'
		},
		{
			id: 3,
			onClick: () => null,
			icon: <StorageRounded />,
			label: 'Interstitial'
		},
		{
			id: 4,
			onClick: () => null,
			icon: <CollectionsRounded />,
			label: 'Gallery'
		}
	];

	return (
		<Sidebar className={classes.Explorer} reverse>
			<div className={classes.Header}>
				<span className={classes.Indicator} />

				<h1 className={classes.Title}>Modify Content</h1>

				<div className={classes.Referrer}>
					<i className={classes.Logo} />
				</div>
			</div>

			<div className={classes.Body}>
				<div className={classes.Wrapper}>
					<div className={classes.Content} style={{ color: 'white' }}></div>

					<div className={classes.Actions}>
						{actions.map((action, index) => (
							<Button onClick={action.onClick} filled={!index} key={action.id}>
								{action.name}
							</Button>
						))}
					</div>
				</div>

				<div className={classes.Bar}>
					{bars.map((bar) => (
						<div
							className={[classes.Handle, bar.id === selectedHandle ? classes.SelectedHandle : null].join(
								' '
							)}
							onClick={() => setSelectedHandle(bar.id)}
							key={bar.id}>
							{bar.icon}
							{bar.label && <small className={classes.Label}>{bar.label}</small>}
						</div>
					))}
				</div>
			</div>
		</Sidebar>
	);
};

export default Explorer;
