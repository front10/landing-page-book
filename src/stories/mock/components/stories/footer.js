export default {
  name: 'Footer',
  summary:
    'A document footer is a small section at the bottom of each page within a document. It is often used to display company data or copyright information.',
  import: ``,
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
        <Column className="col-sm-12 col-md">
            <Copyright text="Front10, LLC" showAllRightText={false} />
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
            <Image src="https://front10.com/img/logos/logo-main.png" width={80} alt="Front 10 logo"/>
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
            <Social type="twitter" url="https://front10.com" gray />
            <Social type="facebook" url="https://front10.com" gray />
            <Social type="linkedin" url="https://front10.com" gray />
        </Column>
    </Row>
</Footer>`,
      tabsActive: []
    }
  ]
};
