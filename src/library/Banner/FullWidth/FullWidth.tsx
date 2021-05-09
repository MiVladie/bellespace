import React, { CSSProperties } from 'react';

import { Link } from 'react-router-dom';
import { IFolder } from 'interfaces/components/folder';
import { FONT_FAMILIES } from 'constants/style';

import classes from './FullWidth.module.scss';

export const defaultContent: IContent = {
	image: 'https://images.pexels.com/photos/2906458/pexels-photo-2906458.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
	imageAlt: 'Woman standing next to the tree',
	title: 'Invest in your brows, it is the crown you never take off',
	description:
		'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!',
	linkLeftText: 'View Services',
	linkLeftTo: 'services',
	linkRightText: 'Book Now',
	linkRightTo: 'https://letscomit.com/',
	scrollTo: 'introduction'
};

export const Content: IFolder[] = [
	{
		name: 'General',
		fields: [
			{
				name: 'title',
				type: 'text',
				label: 'Title',
				rules: {
					required: true
				}
			},
			{
				name: 'description',
				type: 'textarea',
				label: 'Description',
				rules: {
					required: true
				}
			}
		]
	},
	{
		name: 'Links',
		fields: [
			{
				name: 'linkLeftText',
				type: 'text',
				label: 'Left Button Text'
			},
			{
				name: 'linkLeftTo',
				type: 'text',
				label: 'Route',
				prefix: '/',
				rules: {
					isRoute: true
				}
			},
			{
				name: 'linkRightText',
				type: 'text',
				label: 'Right Button Text'
			},
			{
				name: 'linkRightTo',
				type: 'text',
				label: 'URL',
				rules: {
					isURL: true
				}
			}
		]
	},
	{
		name: 'Extra',
		fields: [
			{
				name: 'scrollTo',
				type: 'text',
				info: 'Specify which component the anchor should scroll to.',
				label: 'Scroll To',
				prefix: '#'
			},
			{
				name: 'imageAlt',
				type: 'text',
				info:
					'This will be displayed as a fallback, in case the image will fail to load. It also helps to improve SEO.',
				label: 'Image Alt'
			}
		]
	}
];

export const Styles: IFolder[] = [
	{
		name: 'Title',
		category: 'title',
		fields: [
			{
				name: 'fontFamily',
				type: 'dropdown',
				label: 'Font Family',
				options: FONT_FAMILIES
			},
			{
				name: 'fontSize',
				type: 'slider',
				label: 'Font Size',
				options: {
					min: 1,
					max: 7,
					step: 0.25,
					withInput: true
				}
			},
			{
				name: 'color',
				type: 'color',
				label: 'Color',
				rules: {
					required: true,
					isHex: true
				}
			}
		]
	},
	{
		name: 'Description',
		category: 'description',
		fields: [
			{
				name: 'fontFamily',
				type: 'dropdown',
				label: 'Font Family',
				options: FONT_FAMILIES
			},
			{
				name: 'fontSize',
				type: 'slider',
				label: 'Font Size',
				options: {
					min: 0.8,
					max: 3,
					step: 0.1,
					withInput: true
				}
			},
			{
				name: 'color',
				type: 'color',
				label: 'Color',
				rules: {
					required: true,
					isHex: true
				}
			}
		]
	},
	{
		name: 'Line',
		category: 'line',
		fields: [
			{
				name: 'width',
				type: 'slider',
				label: 'Width',
				options: {
					min: 2,
					max: 7,
					step: 0.2,
					withInput: true
				}
			},
			{
				name: 'height',
				type: 'slider',
				label: 'Height',
				options: {
					min: 0.5,
					max: 4,
					step: 0.25,
					withInput: true
				}
			},
			{
				name: 'backgroundColor',
				type: 'color',
				label: 'Color',
				options: {
					withAlpha: true
				},
				rules: {
					required: true,
					isHex: true
				}
			}
		]
	}
	// {
	// 	name: 'Button Left',
	// 	fields: []
	// },
	// {
	// 	name: 'Button Right',
	// 	fields: []
	// }
];

export interface IStyles {
	title?: CSSProperties;
	description?: CSSProperties;
	line?: CSSProperties;
	buttonLeft?: CSSProperties;
	buttonRight?: CSSProperties;
}

export interface IContent {
	id?: string;
	image: string;
	imageAlt?: string;
	title: string;
	description: string;
	linkLeftTo?: string;
	linkLeftText?: string;
	linkRightTo?: string;
	linkRightText?: string;
	scrollTo?: string;
	styles?: IStyles;
}

const FullWidth: React.FC<IContent> = ({
	id,
	image,
	imageAlt,
	title,
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
			document.getElementById(scrollTo)!.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className={classes.Banner} id={id}>
			<div className={classes.Image}>
				<img src={image} alt={imageAlt} />
			</div>

			<div className={classes.Wrapper}>
				<h1 className={classes.Title} style={styles?.title}>
					{title}
				</h1>
				<div className={classes.Line} style={styles?.line} />
				<p className={classes.Description} style={styles?.description}>
					{description}
				</p>
			</div>

			<div className={classes.Links}>
				{linkLeftText && linkLeftTo && (
					<Link className={classes.Left} to={'/' + linkLeftTo} style={styles?.buttonLeft}>
						{linkLeftText}
					</Link>
				)}
				{linkRightText && linkRightTo && (
					<a
						className={classes.Right}
						href={linkRightTo}
						style={styles?.buttonRight}
						target='_blank'
						rel='noopener noreferrer'>
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

export default FullWidth;
