const def = `const features = [
    {
        id: 1,
        image: 'images/features/themes.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Easy to create themes',
        summary: 'Library customization with Css variables for easy theming and component changes.',
        title: 'Theming'
    },
    {
        id: 2,
        image: 'images/features/testing.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Robust components',
        summary: 'All our components tested, like a Swiss watch. With code coverage above 50%',
        title: 'Unit test'
    },
    {
        id: 3,
        image: 'images/features/speed.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Fast like Usain Bolt',
        summary: 'With our components you can develop a wep app faster than Usain Bolt in 100 meters flat.',
        title: 'Faster dev'
    },
    {
        id: 4,
        image: 'images/features/code.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Easy to use',
        summary: 'Very easy to use, you can do a lot in your wep application with little code.',
        title: 'Simple'
    }
];
  
<Features
    features={features}
    imageCircle={false}
    showBorder={false}
    showSubtitle={false}
/>`;

const shadow = `const features = [
    {
        id: 1,
        image: 'images/features/themes.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Easy to create themes',
        summary: 'Library customization with Css variables for easy theming and component changes.',
        title: 'Theming'
    },
    {
        id: 2,
        image: 'images/features/testing.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Robust components',
        summary: 'All our components tested, like a Swiss watch. With code coverage above 50%',
        title: 'Unit test'
    },
    {
        id: 3,
        image: 'images/features/speed.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Fast like Usain Bolt',
        summary: 'With our components you can develop a wep app faster than Usain Bolt in 100 meters flat.',
        title: 'Faster dev'
    },
    {
        id: 4,
        image: 'images/features/code.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Easy to use',
        summary: 'Very easy to use, you can do a lot in your wep application with little code.',
        title: 'Simple'
    }
];
  
<Features
    imageCircle={false}
    showFooter={false}
    showSubtitle={false}
    showSummary={false}
    shadow
/>`;

const image = `const features = [
    {
        id: 1,
        image: 'images/features/themes.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Easy to create themes',
        summary: 'Library customization with Css variables for easy theming and component changes.',
        title: 'Theming'
    },
    {
        id: 2,
        image: 'images/features/testing.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Robust components',
        summary: 'All our components tested, like a Swiss watch. With code coverage above 50%',
        title: 'Unit test'
    },
    {
        id: 3,
        image: 'images/features/speed.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Fast like Usain Bolt',
        summary: 'With our components you can develop a wep app faster than Usain Bolt in 100 meters flat.',
        title: 'Faster dev'
    },
    {
        id: 4,
        image: 'images/features/code.png',
        link: 'https://front10.com',
        linktext: 'See more...',
        subtitle: 'Easy to use',
        summary: 'Very easy to use, you can do a lot in your wep application with little code.',
        title: 'Simple'
    }
];
  
<Features
    imageBorder
    imageShadow
    showFooter={false}
    showSubtitle={false}
/>`;

export { def, shadow, image };
