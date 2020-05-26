import { initStore } from './store';

export const configureStore = () => {
    const actions = {
        MODIFY_STYLES: (curState, payload) => {
            return { ...curState, ...payload };
        }
    }

    initStore(actions, { 
        styles: {
            Introduction: [
                {
                    name: 'meta',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'main',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'line',
                    options: [                    
                        { name: 'Width', attribute: 'width', type: 'text', value: '' },
                        { name: 'Height', attribute: 'height', type: 'text', value: '' },
                        { name: 'Color', attribute: 'backgroundColor', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'description',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                }
            ],
            Interstitial: [
                {
                    name: 'meta',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'main',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'line',
                    options: [                    
                        { name: 'Width', attribute: 'width', type: 'text', value: '' },
                        { name: 'Height', attribute: 'height', type: 'text', value: '' },
                        { name: 'Color', attribute: 'backgroundColor', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'description',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'button',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' },
                        { name: 'Border Color', attribute: 'borderColor', type: 'text', value: '' },
                        { name: 'Background Color', attribute: 'backgroundColor', type: 'text', value: '' }
                    ]
                },
            ],
            Banner: [
                {
                    name: 'main',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'line',
                    options: [                    
                        { name: 'Width', attribute: 'width', type: 'text', value: '' },
                        { name: 'Height', attribute: 'height', type: 'text', value: '' },
                        { name: 'Color', attribute: 'backgroundColor', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'description',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Size', attribute: 'fontSize', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Letter Spacing', attribute: 'letterSpacing', type: 'text', value: '' },
                        { name: 'Line Height', attribute: 'lineHeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'button left',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Color', attribute: 'color', type: 'text', value: '' },
                        { name: 'Border Color', attribute: 'borderColor', type: 'text', value: '' },
                        { name: 'Background Color', attribute: 'backgroundColor', type: 'text', value: '' }
                    ]
                },
                {
                    name: 'button right',
                    options: [
                        { name: 'Font Family', attribute: 'fontFamily', type: 'text', value: '' },
                        { name: 'Font Weight', attribute: 'fontWeight', type: 'text', value: '' },
                        { name: 'Color', attribute: '', type: 'text', value: '' },
                        { name: 'Border Color', attribute: 'borderColor', type: 'text', value: '' },
                        { name: 'Background Color', attribute: 'backgroundColor', type: 'text', value: '' }
                    ]
                }
            ]
        }
    });
};
