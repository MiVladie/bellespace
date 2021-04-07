import React, { useEffect, useState } from 'react';

import Library, { Sections as LibrarySections, Heading as LibraryHeading } from 'containers/Library/Library';
import Button from 'components/ui/Button/Button';

import classes from './Sidebar.module.scss';

enum Type {
	NEW_PAGE,
	NEW_COMPONENT,
	MODIFY_PAGE,
	MODIFY_COMPONENT,
	DELETE_PAGE,
	DELETE_COMPONENT
}

interface Action {
	label: string;
	onClick: () => void;
}

interface Section {
	id: number;
	name?: string;
	icon: React.ReactNode;
}

interface Props {
	visible: boolean;
	type: Type | null;
}

const Sidebar: React.FC<Props> = ({ visible, type }) => {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	const [section, setSection] = useState<number>(0);
	const [expanded, setExpanded] = useState<boolean>(false);

	const [selectedComponent, setSelectedComponent] = useState<number | null>(null);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 720 && expanded) {
				setExpanded(false);
			}

			setWindowWidth(window.innerWidth);
		});

		return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
	}, []);

	useEffect(() => {
		setExpanded(false);
	}, [visible]);

	const establishData = (): [string, Section[], React.ReactNode, Action[]] => {
		let heading: string = '';
		let sections: Section[] = [];
		let content: React.ReactNode;
		let actions: Action[] = [];

		switch (type) {
			case Type.NEW_COMPONENT:
				heading = LibraryHeading;
				sections = LibrarySections;
				content = <Library category={section} selected={selectedComponent} onSelect={setSelectedComponent} />;
				actions = [
					{
						label: 'Add',
						onClick: () => console.log('adding..')
					},
					{
						label: 'Cancel',
						onClick: () => console.log('cancelling..')
					}
				];
				break;

			default:
				break;
		}

		return [heading, sections, content, actions];
	};

	const selectSectionHandler = (id: number) => {
		if (section === id) {
			return;
		}

		setSelectedComponent(null);
		setSection(id);
	};

	let [heading, sections, content, actions] = establishData();

	return (
		<div className={[classes.Sidebar, !visible ? classes.Hidden : '', expanded ? classes.Expanded : ''].join(' ')}>
			<div className={classes.Header}>
				<span className={classes.Indicator} />

				<h1 className={classes.Heading}>{heading}</h1>

				<div className={classes.Referrer}>
					<i className={classes.Logo} />
				</div>
			</div>

			<div className={classes.Wrapper}>
				<div className={classes.Base}>
					<div className={classes.Content}>{content}</div>
					{actions && (
						<div className={classes.Actions}>
							{actions.map((action, index) => (
								<Button key={index} onClick={action.onClick} filled={index === 0}>
									{action.label}
								</Button>
							))}
						</div>
					)}
				</div>

				<div className={classes.Bar}>
					<div className={classes.Main}>
						{sections.map((s) => (
							<div
								key={s.id}
								className={[classes.Action, section === s.id ? classes.SelectedAction : ''].join(' ')}
								onClick={() => selectSectionHandler(s.id)}>
								{s.icon}
								{s.name && <p className={classes.Label}>{s.name}</p>}
							</div>
						))}
					</div>

					<div className={classes.Extra}></div>
				</div>
			</div>

			<div
				className={classes.Toggle}
				onClick={() => windowWidth >= 720 && setExpanded((prevState) => !prevState)}>
				<div className={classes.Hook} />
			</div>
		</div>
	);
};

export default Sidebar;
