import { IOption } from 'interfaces/components/dropdown';
import { IContent } from 'interfaces/website';

import {
	CollectionsRounded,
	DescriptionRounded,
	DvrRounded,
	KeyboardRounded,
	NearMeRounded,
	PaymentRounded,
	WebRounded
} from '@material-ui/icons';

interface IItem {
	id: number;
	categoryId: number;
	name: string;
	content: IContent;
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
		content: {}
	},
	{
		id: 2,
		categoryId: 1,
		name: 'Left Align',
		content: {}
	},
	{
		id: 3,
		categoryId: 1,
		name: 'Right Align',
		content: {}
	},
	{
		id: 4,
		categoryId: 1,
		name: 'Logo Centered',
		content: {}
	},
	{
		id: 5,
		categoryId: 1,
		name: 'Sticky List',
		content: {}
	},
	{
		id: 6,
		categoryId: 1,
		name: 'Content Stretched',
		content: {}
	},
	{
		id: 7,
		categoryId: 1,
		name: 'With Call to Action',
		content: {}
	},
	{
		id: 8,
		categoryId: 2,
		name: 'Full Width',
		content: {}
	},
	{
		id: 9,
		categoryId: 3,
		name: 'Informational',
		content: {}
	},
	{
		id: 10,
		categoryId: 4,
		name: 'With Discounts',
		content: {}
	},
	{
		id: 11,
		categoryId: 5,
		name: 'Grid',
		content: {}
	},
	{
		id: 12,
		categoryId: 6,
		name: 'Text Centered',
		content: {}
	},
	{
		id: 13,
		categoryId: 7,
		name: 'Small',
		content: {}
	}
];
