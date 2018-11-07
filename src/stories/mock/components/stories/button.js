import withStyles from '../../../../helpers/WithStyles/map.json';

export default {
  name: 'Button',
  summary: `<code class="code">Buttons</code> is based on <code class="code">Bootstrap</code> buttons and includes several predefined button styles, 
  each serving its own <code class="code">semantic</code> purpose, with a few extras thrown in for more control.`,
  import: `import { ThemeSelector } from '../../../addons/ThemeSwitcher';
    import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent';
    import { Navbar, Footer } from '../../../components';`,
  withStyles,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Button color="primary" tooltip="This is a tooltip">
  <Icon icon="fa fa-home" /> Home
</Button>`,
      tabsActive: ['code']
    },
    {
      name: 'Buttons',
      summary: '',
      code: `<div>
  <Button marginRight="1" color="primary"> Primary </Button>
  <Button marginRight="1" color="secondary"> Secondary </Button>
  <Button marginRight="1" color="success"> Success </Button>
  <Button marginRight="1" color="danger"> Danger </Button>
  <Button marginRight="1" color="warning"> Warning </Button>
  <Button marginRight="1" color="info"> Info </Button>
  <Button marginRight="1" color="light"> Light </Button>
  <Button marginRight="1" color="dark"> Dark </Button>
  <Button marginRight="1" color="link"> Link </Button>
</div>`,
      tabsActive: []
    },
    {
      name: 'Buttons Outline',
      summary: '',
      code: `<React.Fragment>
  <Button marginRight="1" outline color="primary">Primary</Button>
  <Button marginRight="1" outline color="secondary">Secondary</Button>
  <Button marginRight="1" outline color="success">Success</Button>
  <Button marginRight="1" outline color="danger">Danger</Button>
  <Button marginRight="1" outline color="warning">Warning</Button>
  <Button marginRight="1" outline color="info">Info</Button>
  <Button marginRight="1" outline color="light">Light</Button>
  <Button marginRight="1" outline color="dark">Dark</Button>
  <Button marginRight="1" outline color="link">Link</Button>
</React.Fragment>`,
      tabsActive: []
    },
    {
      name: 'Size (small)',
      summary: '',
      code: `<React.Fragment>
  <Button marginRight="1" color="primary" size="sm">Small button</Button>
  <Button marginRight="1" color="secondary" size="sm">Small button</Button>
</React.Fragment>`,
      tabsActive: []
    },
    {
      name: 'Size (large)',
      summary: '',
      code: `<React.Fragment>
  <Button marginRight="1" color="primary" size="lg">Large button</Button>
  <Button marginRight="1" color="secondary" size="lg">Large button</Button>
</React.Fragment>`,
      tabsActive: []
    },
    {
      name: 'Desactivate state',
      summary: '',
      code: `<React.Fragment>
  <Button marginRight="1" color="primary" disabled>Disabled button</Button>
  <Button marginRight="1" color="secondary" disabled>Disabled button</Button>
</React.Fragment>`,
      tabsActive: []
    },
    {
      name: 'Active state',
      summary: '',
      code: `<React.Fragment>
  <Button marginRight="1" color="primary" active>Active button</Button>
  <Button marginRight="1" color="secondary" active>Active button</Button>
</React.Fragment>`,
      tabsActive: []
    }
  ]
};
