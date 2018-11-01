export default {
  name: 'Navbar',
  summary: `A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site.`,
  import: `import { ThemeSelector } from '../../../addons/ThemeSwitcher';
      import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent';
      import { Navbar, Footer } from '../../../components';`,
  stories: [
    {
      name: 'Basic',
      summary: 'Esta es la descripción de la story <code class="code">Basic</code>.',
      code: `<Navbar
    transparent={false}
    fixed={false}
    brandName=""
    brandLink="https://front10.com"
    brandLogo="/images/logo/front10.png"
    expand="md"
    rightItems={[
        {title: 'Services'},
        {title: 'Contact'}
    ]}
    leftItems={[
        {
            title: 'Google',
            href: 'https://google.com',
            target: '_blank',
            icon: 'fa fa-google'
        },
        {
            title: 'Facebook',
            href: 'https://facebook.com',
            target: '_blank',
            icon: 'fa fa-facebook-official'
        }
    ]}
/>`,
      tabsActive: ['code'],
      cssVariables: ['--Navbar-backgroundColor']
    }
  ]
};
