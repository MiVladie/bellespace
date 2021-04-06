import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Banner.module.scss';

interface Props {
	id: string;
	image: string;
	main: string;
	description: string;
	linkLeftTo?: string;
	linkLeftText?: string;
	linkRightTo?: string;
	linkRightText?: string;
	scrollTo?: string;
	styles: any;
}

interface Field {
	type: 'input' | 'textarea' | 'dropdown' | 'route' | 'hash' | 'link' | 'upload' | 'color';
	name: string;
	label: string;
	prefix?: string;
	icon?: React.ReactNode;
	options?: {
		required?: boolean;
		lowercase?: boolean;
		whitespaces?: boolean;
	};
}

interface Structure {
	id: number;
	name: string;
	category: number;
	url?: string;
	fields: Field[];
}

const Banner: React.FC<Props> = ({
	id,
	image,
	main,
	description,
	linkLeftTo,
	linkLeftText,
	linkRightTo,
	linkRightText,
	scrollTo,
	styles
}) => {
	const scrollHandler = () => {
		if (scrollTo && document.getElementById(scrollTo) != null) {
			document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className={classes.Banner} id={id}>
			<div className={classes.Image}>
				<img src={image} alt={main} />
			</div>

			<div className={classes.Wrapper}>
				<h1 className={classes.Main} style={styles.main}>
					{main}
				</h1>

				<div className={classes.Line} style={styles.line} />

				<p className={classes.Description} style={styles.description}>
					{description}
				</p>
			</div>

			<div className={classes.Links}>
				{linkLeftTo && (
					<Link className={classes.Left} to={linkLeftTo} style={styles['button left']}>
						{linkLeftText}
					</Link>
				)}
				{linkRightTo && (
					<a className={classes.Right} href={linkRightTo} style={styles['button right']} target='__blank'>
						{linkRightText}
					</a>
				)}
			</div>

			{scrollTo && (
				<button className={classes.Scroll} onClick={scrollHandler}>
					<span className={classes.Circle} />
					<span className={classes.Knob} />
				</button>
			)}
		</section>
	);
};

export default Banner;

export const data: Structure = {
	id: 1,
	name: 'Banner',
	category: 1,
	fields: [
		{
			type: 'input',
			name: 'main',
			label: 'Main'
		},
		{
			type: 'input',
			name: 'description',
			label: 'Description'
		},
		{
			type: 'input',
			name: 'leftLinkText',
			label: 'Left Link Text'
		},
		{
			type: 'input',
			name: 'rightLinkText',
			label: 'Right Link Text'
		},
		{
			type: 'route',
			name: 'leftLinkURL',
			label: 'Left Link URL'
		},
		{
			type: 'route',
			name: 'rightLinkURL',
			label: 'Right Link URL'
		},
		{
			type: 'upload',
			name: 'image',
			label: 'Image'
		},
		{
			type: 'hash',
			name: 'scrollTo',
			label: 'Scroll To'
		}
	]
};
