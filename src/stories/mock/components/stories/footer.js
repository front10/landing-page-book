export default {
  name: 'Footer',
  summary:
    'A document footer is a small section at the bottom of each page within a document. It is often used to display company data or copyright information.',
  import: ``,
  withStyles: true,
  extractProps: ['social', 'header', 'link', 'copyright'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Footer 
    socialUrl="https://front10.com"
    copyright="Front10, LLC"
    socials={['facebook', 'linkedin', 'google', 'twitter']}
    sections={[
    {
        name: 'Features',
        sections: [
            {name: 'Cool stuff',url: 'https://front10.com'},
            {name: 'Random feature',url: 'https://front10.com'},
            {name: 'Team feature',url: 'https://front10.com'},
            {name: 'Stuff for developers',url: 'https://front10.com'},
            {name: 'Another one',url: 'https://front10.com'},
            {name: 'Last time',url: 'https://front10.com'}
        ]
    },
    {
        name: 'Resources',
        sections: [
            {name: 'Resource',url: 'https://front10.com'},
            {name: 'Resource name',url: 'https://front10.com'},
            {name: 'Another resource',url: 'https://front10.com'},
            {name: 'Final resource',url: 'https://front10.com'}
        ]
    },
    {
        name: 'About',
        sections: [
            {name: 'Team',url: 'https://front10.com'},
            {name: 'Locations',url: 'https://front10.com'},
            {name: 'Privacy',url: 'https://front10.com'},
            {name: 'Terms',url: 'https://front10.com'}
        ]
    }]}
/>`,
      tabsActive: ['code']
    },
    {
      name: 'With children',
      summary: '',
      code: `<Footer>
    <Row>
        <Column margin="2">
            <Copyright textColor="light" text="Front10, LLC" showAllRightText={false} />
        </Column>
        <Column margin="2">
            <Image src="https://front10.com/img/logos/logo-main.png" width={80} alt="Front 10 logo"/>
        </Column>
        <Column margin="2">
            <Social margin="2" type="twitter" url="https://front10.com" gray />
            <Social margin="2" type="facebook" url="https://front10.com" gray />
            <Social margin="2" type="linkedin" url="https://front10.com" gray />
        </Column>
    </Row>
</Footer>`,
      tabsActive: []
    }
  ]
};
