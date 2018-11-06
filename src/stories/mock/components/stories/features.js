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
    buttonOutline
    buttonColor="primary"
    features={${JSON.stringify(features, null, 8)}}
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Image & title',
      summary: '',
      code: `<Features
    showSubtitle={false}
    showSummary={false}
    showFooter={false}
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
    showFooter={false}
    features={${JSON.stringify(features, null, 8)}}
/>`,
      tabsActive: []
    },
    {
      name: 'With image shadow',
      summary: '',
      code: `<Features
      imageShadow
      showSubtitle={false}
      showFooter={false}
      imageCircle={true}
    features={${JSON.stringify(features, null, 8)}}
/>`,
      tabsActive: []
    }
  ]
};
