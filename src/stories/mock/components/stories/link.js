export default {
  name: 'Link',
  summary:
    'Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.',
  import: '',
  withStyles: true,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">This is a link</Link>`,
      tabsActive: ['code']
    },
    {
      name: 'Disabled',
      summary: '',
      code: `<Link disabled href="https://front10.com">This is disabled</Link>`,
      tabsActive: []
    },
    {
      name: 'With icon',
      summary: '',
      code: `<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">
    <Icon icon="fa fa-home" />
    <span>This is disabled</span>
</Link>`,
      tabsActive: []
    },
    {
      name: 'Like a button',
      summary: '',
      code: `<>
    <Link className="btn btn-primary mr-1" href="https://github.com/front10/landing-page-book" tooltip="This is a tooltip" target="_blank">
        <Icon icon="fa fa-github" /> View code on Github
    </Link>
    <Link className="btn btn-outline-success mr-1" href="https://front10.com/#contactForm" tooltip="Contact us" target="_blank">
        <Icon icon="fa fa-info-circle" /> Contact us
    </Link>
</>`,
      tabsActive: []
    }
  ]
};
