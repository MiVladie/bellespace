import React from 'react';

import { data as BannerData } from './Banner/Banner';

interface Component {
	id: number;
	name: string;
	url?: string;
}

interface Category {
	id: number;
	icon?: React.ReactNode;
	components: Component[];
}

export const Categories: Category[] = [
	{
		id: 0,
		components: [
			{
				id: BannerData.id,
				name: BannerData.name,
				url: BannerData.url
			}
		]
	},
	{
		id: 1,
		components: []
	},
	{
		id: 2,
		components: []
	},
	{
		id: 3,
		components: []
	}
];
