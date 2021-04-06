import React from 'react';

import { data as BannerData } from './Banner/Banner';

interface Component {
	id: number;
	image?: string;
}

interface Category {
	id: number;
	name: string;
	icon?: React.ReactNode;
	components: Component[];
}

export const Categories: Category[] = [
	{
		id: 1,
		name: 'Banner',
		components: [
			{
				id: BannerData.id,
				image: BannerData.image
			}
		]
	},
	{
		id: 2,
		name: 'Introduction',
		components: []
	},
	{
		id: 3,
		name: 'Interstitial',
		components: []
	},
	{
		id: 4,
		name: 'Gallery',
		components: []
	}
];
