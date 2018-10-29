import backers from '../backers';

export default {
  name: 'Backers',
  summary:
    'A person, institution, or country that supports something, especially financially. Its important show the people who support your idea.',
  import: `import { ThemeSelector } from '../../../addons/ThemeSwitcher';
      import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent';
      import { Navbar, Footer } from '../../../components';`,
  stories: [
    {
      name: 'Basic',
      summary: 'Esta es la descripción de la story Basic',
      code: `<Backers
    backers={${JSON.stringify(backers, null, 8)}}
/>`,
      tabsActive: ['code']
    }
  ]
};
