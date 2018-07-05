import config from '../storybook-utils/configs/basic'

function loadStories() {
    require('./stories');
}

const uiOptions = {
    name: 'Explorer',
    url: 'https://front10.gitlab.io/component-explorer',
    addonPanelInRight: true,
}

config({ loadStories, uiOptions })