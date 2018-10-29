const navbarData = {
  rightItems: [{ title: 'Services' }, { title: 'Contact' }],
  leftItems: [
    {
      title: 'Introduction',
      href: '/introduction',
      target: '_blank'
    },
    {
      title: 'Components',
      href: '/components',
      target: '_blank'
    }
  ]
};

const importCode = `
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent';
import { Navbar, Footer } from '../../../components';
`;

const story = [
  {
    name: 'Basic',
    summary: 'Esta es la descripción de la story Basic',
    code: `<Button tooltip="Tis is a button tooltip">
        <Icon icon="fa fa-home" /> Home
    </Button>`,
    tabsActive: ['code']
  },
  {
    name: 'Buttons',
    summary: 'Esta es la descripción de la story Default',
    code: `<React.Fragment>
    <Button className="mr-1" color="primary"> Primary </Button>
    <Button className="mr-1" color="secondary"> Secondary </Button>
    <Button className="mr-1" color="success"> Success </Button>
    <Button className="mr-1" color="danger"> Danger </Button>
    <Button className="mr-1" color="warning"> Warning </Button>
    <Button className="mr-1" color="info"> Info </Button>
    <Button className="mr-1" color="light"> Light </Button>
    <Button className="mr-1" color="dark"> Dark </Button>
    <Button className="mr-1" color="link"> Link </Button>
</React.Fragment>`,
    tabsActive: []
  },
  {
    name: 'Buttons Outline',
    summary: 'Esta es la descripción de la story Default',
    code: `<React.Fragment>
        <Button className="mr-1" outline color="primary">Primary</Button>
        <Button className="mr-1" outline color="secondary">Secondary</Button>
        <Button className="mr-1" outline color="success">Success</Button>
        <Button className="mr-1" outline color="danger">Danger</Button>
        <Button className="mr-1" outline color="warning">Warning</Button>
        <Button className="mr-1" outline color="info">Info</Button>
        <Button className="mr-1" outline color="light">Light</Button>
        <Button className="mr-1" outline color="dark">Dark</Button>
        <Button className="mr-1" outline color="link">Link</Button>
    </React.Fragment>`,
    tabsActive: []
  },
  {
    name: 'Size (small)',
    summary: 'Esta es la descripción de la story Default',
    code: `<React.Fragment>
        <Button className="mr-1" color="primary" size="sm">Small button</Button>
        <Button className="mr-1" color="secondary" size="sm">Small button</Button>
    </React.Fragment>`,
    tabsActive: []
  },
  {
    name: 'Size (large)',
    summary: 'Esta es la descripción de la story Default',
    code: `<React.Fragment>
        <Button className="mr-1" color="primary" size="lg">Large button</Button>
        <Button className="mr-1" color="secondary" size="lg">Large button</Button>
    </React.Fragment>`,
    tabsActive: []
  },
  {
    name: 'Desactivate state',
    summary: 'Esta es la descripción de la story Default',
    code: `<React.Fragment>
        <Button className="mr-1" color="primary" disabled>Disabled button</Button>
        <Button className="mr-1" color="secondary" disabled>Disabled button</Button>
    </React.Fragment>`,
    tabsActive: []
  },
  {
    name: 'Active state',
    summary: 'Esta es la descripción de la story Default',
    code: `<React.Fragment>
        <Button className="mr-1" color="primary" active>Active button</Button>
        <Button className="mr-1" color="secondary" active>Active button</Button>
    </React.Fragment>`,
    tabsActive: []
  }
];

const elements = [
  {
    image: 'images/features/components.png',
    title: '+40 Components',
    subtitle: 'You can use many components',
    link: 'https://front10.com'
  },
  {
    image: 'images/features/speed.png',
    title: 'Easy & Fast',
    subtitle: 'Very easy and fast develop',
    link: 'https://front10.com'
  },
  {
    image: 'images/features/themes.png',
    title: 'Theming',
    subtitle: 'Customize our components',
    link: 'https://front10.com'
  },
  {
    image: 'images/features/integration.png',
    title: 'Integration',
    subtitle: 'Can be used in many plattaforms',
    link: 'https://front10.com'
  }
];

export { navbarData, story, importCode, elements };
