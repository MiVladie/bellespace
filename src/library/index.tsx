import { IComponent as IPreview } from 'interfaces/components/component';
import { COMPONENTS, COMPONENT_CATEGORIES } from 'constants/website';

export const getCategoryById = (id: number) => {
	const category = COMPONENT_CATEGORIES.find((category) => category.id === id);

	if (!category) {
		throw new Error('Could not find a component!');
	}

	return category;
};

export const getComponentsByCategory = (id: number): IPreview[] => {
	return COMPONENTS.filter((component) => component.categoryId === id);
};

export const getComponentById = (id: string) => {
	const component = COMPONENTS.find((component) => component.id === id);

	if (!component) {
		throw new Error('Could not find a component!');
	}

	return component;
};
