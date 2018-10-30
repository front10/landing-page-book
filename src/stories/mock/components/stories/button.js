export default {
  name: 'Button',
  summary: `<code class="code">Buttons</code> is based on <code class="code">Bootstrap</code> buttons and includes several predefined button styles, 
  each serving its own <code class="code">semantic</code> purpose, with a few extras thrown in for more control.`,
  import: `import { ThemeSelector } from '../../../addons/ThemeSwitcher';
    import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent';
    import { Navbar, Footer } from '../../../components';`,
  stories: [
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
  ]
};
