const def = `<BackersOpenCollective
    imageRounded={boolean('Image rounded', true)}
    imageBordered={boolean('Image border', true)}
    imageGray={boolean('Gray', false)}
    sortDirection={select('Sort direction', { asc: 'asc', desc: 'desc' }, 'desc')}
    collective={text('Collective', 'webpack')}
/>`;

export default def;
