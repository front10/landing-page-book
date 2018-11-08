export default {
  name: 'Analytics',
  summary:
    'Analytics makes it easy to understand how your site and app users are engaging with your content, so you know what’s working and what’s not. See how people are interacting with your sites and apps and the role that different channels play by viewing robust reports and dashboards. You can even connect systems used to measure CRM, points of sale, and other touchpoints with your customers for a more complete view.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: 'This component is embedded directly in the javascript and shows nothing.',
      code: `<Analytics idTracking="UA-0000000-0" urlPath="/" debug />`,
      tabsActive: ['code']
    }
  ]
};
