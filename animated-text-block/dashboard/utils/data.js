const slug = "animated-text-block";


export const dashboardInfo = (info) => {
    const { version, isPremium, hasPro, licenseActiveNonce } = info;

    const proSuffix = isPremium ? ' Pro' : '';

    return {
        name: `Animated Text Block${proSuffix}`,
        displayName: `Animated Text Block${proSuffix} - Add Typing and Looping Text Effects`,
        description:
            "Animated Text Block is a dynamic and customizable plugin that brings to your website content to life with stunning text animations. Easily create eye-catching headlines, catchy slogans, or dynamic messages with powerful animation controls, multiple themes, and unique effects. Perfect for grabbing attention and enhancing user engagement on your WordPress site.",
        slug,
        version,
        isPremium,
        hasPro,
        displayOurPlugins: true,
        media: {
            logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
            banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
            thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
            // proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
            // video: 'https://youtu.be/n3B4SpbDS30',
            // isYoutube: true
        },
        pages: {
            org: `https://wordpress.org/plugins/${slug}/`,
            landing: `https://bplugins.com/products/${slug}/`,
            docs: `https://bplugins.com/docs/${slug}/`,
            pricing: `https://bplugins.com/products/${slug}/pricing`,
        },
        freemius: {
            product_id: 17879,
            plan_id: 29699,
            public_key: 'pk_64045f2c4e13c86dc40f805c6062b'
        },
        
        licenseActiveNonce,

        changelogs: [
            {
                version: '1.2.2 - 14 Feb, 2026',
                type: 'New',
                list: [
                    'Instantly switch between predefined appearance'
                ]
            },
            {
                version: '1.2.1 - 8 Feb, 2026',
                type: 'update',
                list: [
                    'Some style customization',
                    'Pro modal, Pro selector, Pro selector layout rename and upgrade the premium quality designed',
                    'Added prefix, suffix content and add multiple sentence to animate them one by one'
                ]
            },
            {
                version: '1.1.9 - 15 Nov, 2025',
                type: 'update',
                list: [
                    'reemius sdk latest version Update',
                    'Demo created for this plugin'
                ]
            },
            {
                version: '1.8.0 - 10 Nov, 2025',
                type: 'Fix',
                list: [
                    'Support translator issue fixed'
                ]
            },
        ],
        proFeatures: [
            'Choose from a variety of pre-designed themes for unique text animations',
            'Allows you to display and animate multiple text lines in sequence',
            'Access premium animation styles for stunning visuals',
            'Fine-tune the speed of text animations for better effects',
            'Choose from a wide range of fonts, colors, and text styles to match your brand',
            'Enhance 3D effects with adjustable perspective depth',
            'Add dynamic motion with oscillating text effects',
            'Automatically loop animations for continuous display'
        ],
        startButton: {
			label: 'Start Now',
			url: 'wp-admin/post-new.php?post_type=animated-text-block'
		}
    }
}

export const demoInfo = {
    allInOneLabel: 'See All Demos',
    allInOneLink: 'https://bblockswp.com/demo/animated-text/',
    demos: [
        {
            "title": "Default Style",
            "description": "Clean player with basic controls.",
            "url": "https://bblockswp.com/demo/animated-text-default/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Wave Reveal",
            "description": "Starts muted and plays automatically.",
            "url": "https://bblockswp.com/demo/animated-text-theme-2/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Zoom",
            "description": "Resize player to fit your layout.",
            "url": "https://bblockswp.com/demo/animated-text-theme-3/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Swaying",
            "description": "Shows every available control option.",
            "url": "https://bblockswp.com/demo/animated-text-theme-4/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "3D Orbit",
            "description": "Skip 2s and set preload behavior.",
            "url": "https://bblockswp.com/demo/animated-text-theme-1/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Axis Wave",
            "description": "Loop tracks endlessly when enabled.",
            "url": "https://bblockswp.com/demo/animated-text-theme-5/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Elastic Drop",
            "description": "Sleek modern Fusion skin design.",
            "url": "https://bblockswp.com/demo/animated-text-theme-6/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Stretch Wave",
            "description": "Poster image with rounded corners in Fusion skin.",
            "url": "https://bblockswp.com/demo/animated-text-theme-8/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": 'iframe'
        },
        {
            "title": "Typewriter",
            "description": "Creative stamp-style player skin.",
            "url": "https://bblockswp.com/demo/animated-text-theme-7/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": "iframe"
        },
        {
            "title": "Flourish",
            "description": "Autoplay-enabled playlist player.",
            "url": "https://bblockswp.com/demo/animated-text-theme-9/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": "iframe"
        },
        {
            "title": "Shaky TV",
            "description": "Large playlist with extra controls.",
            "url": "https://bblockswp.com/demo/animated-text-theme-10/",
            "icon": (<svg stroke='#000' fill='#000' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M5 9V7H7V9H5Z' fill='currentColor'></path><path d='M9 9H19V7H9V9Z' fill='currentColor'></path><path d='M5 15V17H7V15H5Z' fill='currentColor'></path><path d='M19 17H9V15H19V17Z' fill='currentColor'></path><path fillRule='evenodd' clipRule='evenodd' d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z' fill='currentColor'></path></svg>),
            "type": "iframe"
        }
    ]
}

export const pricingInfo = {
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
    pluginId: 17879,
    planId: 29699,
    licenses: [
        1,
        3,
        null
    ],
    button: {
        label: 'Buy Now ➜'
    },
    featured: {
        selected: 3, // choose from licenses item
    }
}