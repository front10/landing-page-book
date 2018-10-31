import features from '../features';

export default {
  name: 'Features',
  summary:
    'Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Features
    shadow={false}
    showTitle
    showImage
    showSubtitle={false}
    showSummary
    imageCircle={false}
    imageBorder={false}
    imageShadow={false}
    showFooter
    outlineButton
    contentAlign="center"
    features={${JSON.stringify(features, null, 8)}}
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Image & title',
      summary: '',
      code: `<Features
    shadow={false}
    showSubtitle={false}
    showSummary={false}
    imageCircle={false}
    imageBorder={false}
    imageShadow={false}
    showFooter={false}
    contentAlign="center"
    features={${JSON.stringify(features, null, 8)}}
/>`,
      tabsActive: []
    },
    {
      name: 'With shadow',
      summary: '',
      code: `<Features
    shadow
    showSubtitle={false}
    imageCircle={false}
    imageBorder={false}
    imageShadow={false}
    showFooter={false}
    contentAlign="center"
    features={${JSON.stringify(features, null, 8)}}
/>`,
      tabsActive: []
    },
    {
      name: 'With image shadow',
      summary: '',
      code: `<Features
    imageShadow
    shadow={false}
    showSubtitle={false}
    showFooter={false}
    contentAlign="center"
    features={${JSON.stringify(features, null, 8)}}
/>`,
      tabsActive: []
    }
  ]
};
