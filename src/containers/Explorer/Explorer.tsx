import React, { useContext, useEffect, useState } from 'react';

import { ActivityContext } from 'context/providers/activity';
import { IBar } from 'interfaces/activities';

import Sidebar from 'hoc/Sidebar/Sidebar';
import Button from 'components/ui/Button/Button';

import * as NewPage from 'containers/Hierarchy/NewPage';
import * as NewComponent from 'containers/Hierarchy/NewComponent';
import * as ModifyPage from 'containers/Hierarchy/ModifyPage';
import * as ModifyComponent from 'containers/Hierarchy/ModifyComponent';

import classes from './Explorer.module.scss';

const Explorer: React.FC = () => {
	const [bars, setBars] = useState<IBar[]>([]);

	const [selectedBar, setSelectedBar] = useState<number | null>();

	const { state, dispatch } = useContext(ActivityContext);

	useEffect(() => {
		establishBars();
	}, [state]);

	const establishBars = () => {
		if (state.newComponent) {
			setBars(NewComponent.Bars);
		} else if (state.newPage) {
			setBars(NewPage.Bars);
		} else if (state.activeComponent) {
			setBars(ModifyComponent.Bars);
		} else if (state.activePage) {
			setBars(ModifyPage.Bars);
		} else {
			setBars([]);
			setSelectedBar(null);

			return;
		}

		setSelectedBar(0);
	};

	const renderBody = (): React.ReactNode => {
		if (state.newComponent) {
			return <NewComponent.Content />;
		} else if (state.newPage) {
			return <NewPage.Content />;
		} else if (state.activeComponent) {
			return <ModifyComponent.Content />;
		} else if (state.activePage) {
			return <ModifyPage.Content />;
		} else {
			return null;
		}
	};

	return (
		<Sidebar className={classes.Explorer} visible={selectedBar != null} reverse>
			<div className={classes.Header}>
				<span className={classes.Indicator} />

				<h1 className={classes.Title}>{selectedBar != null && bars[selectedBar]?.heading}</h1>

				<div className={classes.Referrer}>
					<i className={classes.Logo} />
				</div>
			</div>

			<div className={classes.Body}>
				<div className={classes.Wrapper}>
					<div className={classes.Content}>{renderBody()}</div>

					{selectedBar != null && bars[selectedBar]?.actions && (
						<div className={classes.Actions}>
							{bars[selectedBar].actions?.map((action, index) => (
								<Button onClick={() => null} filled={!index} key={action.id} disabled>
									{action.name}
								</Button>
							))}
						</div>
					)}
				</div>

				<div className={classes.Bar}>
					{bars.map((bar, index) => (
						<div
							className={[classes.Handle, index === selectedBar ? classes.SelectedHandle : null].join(
								' '
							)}
							onClick={() => setSelectedBar(index)}
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
