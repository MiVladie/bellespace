import { IContent } from 'interfaces/website';
import { IOption } from 'interfaces/components/dropdown';
import { IFolder } from 'interfaces/components/folder';

import {
	CollectionsRounded,
	DescriptionRounded,
	DvrRounded,
	KeyboardRounded,
	NearMeRounded,
	PaymentRounded,
	WebRounded
} from '@material-ui/icons';
import * as FullWidth from 'library/Banner/FullWidth/FullWidth';

interface IItem {
	id: number;
	categoryId: number;
	name: string;
	defaultContent?: IContent;
	content: IFolder[];
	style: IFolder[];
}

export const WEBSITE_CATEGORIES: IOption[] = [
	{
		value: 1,
		label: 'Architecture & Building'
	},
	{
		value: 2,
		label: 'Art & Design'
	},
	{
		value: 3,
		label: 'Business & Law'
	},
	{
		value: 4,
		label: 'Cars & Transportation'
	},
	{
		value: 5,
		label: 'Education'
	},
	{
		value: 6,
		label: 'Fashion & Beauty'
	},
	{
		value: 7,
		label: 'Food & Restaurant'
	},
	{
		value: 8,
		label: 'Industrial'
	},
	{
		value: 9,
		label: 'Interior'
	},
	{
		value: 10,
		label: 'Medicine & Science'
	},
	{
		value: 11,
		label: 'Music & Entertainment'
	},
	{
		value: 12,
		label: 'Nature'
	},
	{
		value: 13,
		label: 'Pets & Animals'
	},
	{
		value: 14,
		label: 'Real Estate'
	},
	{
		value: 15,
		label: 'Sports'
	},
	{
		value: 16,
		label: 'Technology'
	},
	{
		value: 17,
		label: 'Travel & Hotels'
	},
	{
		value: 18,
		label: 'Portfolio'
	},
	{
		value: 19,
		label: 'Wedding'
	}
];

export const COMPONENT_CATEGORIES = [
	{
		id: 1,
		icon: <NearMeRounded />,
		label: 'Navbar'
	},
	{
		id: 2,
		icon: <DvrRounded />,
		label: 'Banner'
	},
	{
		id: 3,
		icon: <WebRounded />,
		label: 'Interstitial'
	},
	{
		id: 4,
		icon: <PaymentRounded />,
		label: 'Services'
	},
	{
		id: 5,
		icon: <CollectionsRounded />,
		label: 'Gallery'
	},
	{
		id: 6,
		icon: <KeyboardRounded />,
		label: 'Form'
	},
	{
		id: 7,
		icon: <DescriptionRounded />,
		label: 'Footer'
	}
];

export const COMPONENTS: IItem[] = [
	{
		id: 1,
		categoryId: 1,
		name: 'Text Centered',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 2,
		categoryId: 1,
		name: 'Left Align',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 3,
		categoryId: 1,
		name: 'Right Align',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 4,
		categoryId: 1,
		name: 'Logo Centered',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 5,
		categoryId: 1,
		name: 'Sticky List',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 6,
		categoryId: 1,
		name: 'defaultContent Stretched',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 7,
		categoryId: 1,
		name: 'With Call to Action',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 8,
		categoryId: 2,
		name: 'Full Width',
		defaultContent: FullWidth.defaultContent,
		content: FullWidth.Content,
		style: FullWidth.Styles
	},
	{
		id: 9,
		categoryId: 3,
		name: 'Informational',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 10,
		categoryId: 4,
		name: 'With Discounts',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 11,
		categoryId: 5,
		name: 'Grid',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 12,
		categoryId: 6,
		name: 'Text Centered',
		defaultContent: {},
		content: [],
		style: []
	},
	{
		id: 13,
		categoryId: 7,
		name: 'Small',
		defaultContent: {},
		content: [],
		style: []
	}
];
