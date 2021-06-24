import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { IStyle } from 'interfaces/website';
import { IFolder } from 'interfaces/components/folder';
import { FONT_FAMILIES } from 'constants/style';

import classes from './FullWidth.module.scss';

export const defaultContent: IContent = {
	image:
		'https://images.pexels.com/photos/6930438/pexels-photo-6930438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	imageAlt: 'Woman standing next to the tree',
	title: 'Invest in your brows, it is your crown',
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
			},
			{
				name: 'image',
				type: 'text',
				label: 'Image',
				rules: {
					required: true,
					isURL: true
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

export const defaultStyles: IStyle = {
	title: {
		fontFamily: 1,
		fontSize: 4.5,
		color: '#ffffff'
	},
	description: {
		fontFamily: 1,
		fontSize: 1.5,
		color: '#ffffff'
	},
	line: {
		width: 5,
		backgroundColor: '#ffffff'
	},
	buttonLeft: {
		fontFamily: 1,
		width: 11,
		height: 3.25,
		borderWidth: 2,
		color: '#fff',
		textHoverColor: '#000'
	},
	buttonRight: {
		fontFamily: 1,
		width: 11,
		height: 3.25,
		borderWidth: 2,
		color: '#fff',
		textHoverColor: '#000'
	}
};

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
	},
	{
		name: 'Button Left',
		category: 'buttonLeft',
		fields: [
			{
				name: 'fontFamily',
				type: 'dropdown',
				label: 'Font Family',
				options: FONT_FAMILIES
			},
			{
				name: 'width',
				type: 'slider',
				label: 'Width',
				options: {
					min: 8,
					max: 14,
					step: 0.25,
					withInput: true
				}
			},
			{
				name: 'height',
				type: 'slider',
				label: 'Height',
				options: {
					min: 2,
					max: 4,
					step: 0.25,
					withInput: true
				}
			},
			{
				name: 'borderWidth',
				type: 'slider',
				label: 'Thickness',
				options: {
					min: 0.5,
					max: 4,
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
			},
			{
				name: 'textHoverColor',
				type: 'color',
				label: 'Text Color',
				rules: {
					required: true,
					isHex: true
				}
			}
		]
	},
	{
		name: 'Button Right',
		category: 'buttonRight',
		fields: [
			{
				name: 'fontFamily',
				type: 'dropdown',
				label: 'Font Family',
				options: FONT_FAMILIES
			},
			{
				name: 'width',
				type: 'slider',
				label: 'Width',
				options: {
					min: 8,
					max: 14,
					step: 0.25,
					withInput: true
				}
			},
			{
				name: 'height',
				type: 'slider',
				label: 'Height',
				options: {
					min: 2,
					max: 4,
					step: 0.25,
					withInput: true
				}
			},
			{
				name: 'borderWidth',
				type: 'slider',
				label: 'Thickness',
				options: {
					min: 0.5,
					max: 4,
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
			},
			{
				name: 'textHoverColor',
				type: 'color',
				label: 'Text Color',
				rules: {
					required: true,
					isHex: true
				}
			}
		]
	}
];

export interface IComponentStyles {
	title: {
		fontFamily: number;
		fontSize: number;
		color: string;
	};
	description: {
		fontFamily: number;
		fontSize: number;
		color: string;
	};
	line: {
		width: number;
		backgroundColor: string;
	};
	buttonLeft: {
		fontFamily: number;
		width: number;
		height: number;
		borderWidth: number;
		color: string;
		textHoverColor: string;
	};
	buttonRight: {
		fontFamily: number;
		width: number;
		height: number;
		borderWidth: number;
		color: string;
		textHoverColor: string;
	};
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
	styles?: IStyle;
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
	const [hovered, setHovered] = useState<'left' | 'right'>();

	const scrollHandler = () => {
		if (scrollTo && document.getElementById(scrollTo) != null) {
			document.getElementById(scrollTo)!.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const getStyles = (key: keyof IComponentStyles) => {
		if (!styles || !(key in styles)) {
			return {};
		}

		let customStyles = {};

		switch (key) {
			case 'title':
				customStyles = {
					fontFamily: FONT_FAMILIES.find((font) => font.value === styles.title.fontFamily)!.label,
					fontSize: styles.title.fontSize + 'rem',
					color: styles.title.color
				};
				break;

			case 'description':
				customStyles = {
					fontFamily: FONT_FAMILIES.find((font) => font.value === styles.description.fontFamily)!.label,
					fontSize: styles.description.fontSize + 'rem',
					color: styles.description.color
				};
				break;

			case 'line':
				customStyles = {
					width: styles.line.width + 'rem',
					backgroundColor: styles.line.backgroundColor
				};
				break;

			case 'buttonLeft':
				customStyles = {
					fontFamily: FONT_FAMILIES.find((font) => font.value === styles.buttonLeft.fontFamily)!.label,
					width: styles.buttonLeft.width + 'rem',
					height: styles.buttonLeft.height + 'rem',
					lineHeight: styles.buttonLeft.height + 'rem',
					borderWidth: styles.buttonLeft.borderWidth + 'px',
					borderColor: styles.buttonLeft.color,
					color: styles.buttonLeft.color
				};

				if (hovered === 'left') {
					customStyles = {
						...customStyles,
						backgroundColor: styles.buttonLeft.color,
						color: styles.buttonLeft.textHoverColor
					};
				}
				break;

			case 'buttonRight':
				customStyles = {
					fontFamily: FONT_FAMILIES.find((font) => font.value === styles.buttonRight.fontFamily)!.label,
					width: styles.buttonRight.width + 'rem',
					height: styles.buttonRight.height + 'rem',
					lineHeight: styles.buttonRight.height + 'rem',
					borderWidth: styles.buttonRight.borderWidth + 'px',
					backgroundColor: styles.buttonRight.color,
					borderColor: styles.buttonRight.color,
					color: styles.buttonRight.textHoverColor
				};

				if (hovered === 'right') {
					customStyles = {
						...customStyles,
						backgroundColor: 'transparent',
						color: styles.buttonRight.color
					};
				}
				break;

			default:
				throw new Error('Could not establish style key!');
		}

		return customStyles;
	};

	return (
		<section className={classes.Banner} id={id}>
			<div className={classes.Image}>
				<img src={image} alt={imageAlt} />
			</div>

			<div className={classes.Wrapper}>
				<h1 className={classes.Title} style={getStyles('title')}>
					{title}
				</h1>

				<div className={classes.Line} style={getStyles('line')} />

				<p className={classes.Description} style={getStyles('description')}>
					{description}
				</p>
			</div>

			<div className={classes.Links}>
				{linkLeftText && linkLeftTo && (
					<Link
						className={[classes.Left].join(' ')}
						to={'/' + linkLeftTo}
						onMouseEnter={() => setHovered('left')}
						onMouseLeave={() => setHovered(undefined)}
						style={getStyles('buttonLeft')}>
						{linkLeftText}
					</Link>
				)}
				{linkRightText && linkRightTo && (
					<a
						className={classes.Right}
						href={linkRightTo}
						onMouseEnter={() => setHovered('right')}
						onMouseLeave={() => setHovered(undefined)}
						target='__blank'
						style={getStyles('buttonRight')}>
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
