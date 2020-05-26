export const allComponents = [
    {
        type: 'Banner',
        content: [
            { name: 'main', attribute: 'main', type: 'input', value: 'Invest in your brows, it is the crown you never take off' },
            { name: 'description', attribute: 'description', type: 'textarea', value: 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!' },
            { name: 'image URL', attribute: 'image', type: 'input', value: 'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
            { name: 'button left URL', attribute: 'linkLeftTo', type: 'url', value: '/services' },
            { name: 'button left text', attribute: 'linkLeftText', type: 'input', value: 'View services' },
            { name: 'button right URL', attribute: 'linkRightTo', type: 'input', value: 'https://letscomit.com/' },
            { name: 'button right text', attribute: 'linkRightText', type: 'input', value: 'Book now' },
            { name: 'scroll to ID name', attribute: 'scrollTo', type: 'input', value: '' }
        ]
    },
    {
        type: 'Introduction',
        content: [
            { name: 'meta', attribute: 'meta', type: 'input', value: 'What we offer' }, 
            { name: 'main', attribute: 'main', type: 'input', value: 'Our services' }, 
            { name: 'description', attribute: 'description', type: 'textarea', value: 'Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper. Sed viverra, sem quis consectetur eleifend, magna orci dictum metus, ut venenatis neque metus ut mi.' },
            { name: 'ID', attribute: 'id', type: 'input', value: '' }
        ]
    },
    {
        type: 'Interstitial',
        content: [
            { name: 'meta', attribute: 'meta', type: 'input', value: 'About us' }, 
            { name: 'main', attribute: 'main', type: 'input', value: 'What we are about' }, 
            { name: 'description', attribute: 'description', type: 'textarea', value: 'Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada.' },
            { name: 'image URL', attribute: 'image', type: 'input', value: 'https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
            { name: 'button text', attribute: 'linkText', type: 'input', value: 'Learn more' },
            { name: 'button URL', attribute: 'linkTo', type: 'url', value: '/about' },
            { name: 'ID', attribute: 'id', type: 'input', value: '' }
        ]
    }
];
