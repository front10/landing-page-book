const def = `const sectionsList = [{
      name: 'Features',
      sections: [{
          name: 'Cool stuff',
          url: 'https://front10.com'
        },
        {
          name: 'Random feature',
          url: 'https://front10.com'
        },
        {
          name: 'Team feature',
          url: 'https://front10.com'
        },
        {
          name: 'Stuff for developers',
          url: 'https://front10.com'
        },
        {
          name: 'Another one',
          url: 'https://front10.com'
        },
        {
          name: 'Last time',
          url: 'https://front10.com'
        }]
    },{
      name: 'Resources',
      sections: [{
          name: 'Resource',
          url: 'https://front10.com'
        },
        {
          name: 'Resource name',
          url: 'https://front10.com'
        },
        {
          name: 'Another resource',
          url: 'https://front10.com'
        },
        {
          name: 'Final resource',
          url: 'https://front10.com'
        }]
    },{
      name: 'About',
      sections: [{
          name: 'Team',
          url: 'https://front10.com'
        },
        {
          name: 'Locations',
          url: 'https://front10.com'
        },
        {
          name: 'Privacy',
          url: 'https://front10.com'
        },
        {
          name: 'Terms',
          url: 'https://front10.com'
        }]
    }];

  const socialmedias = [
    'facebook',
    'linkedin',
    'google',
    'twitter'
  ];

  <Footer
    copyright="Front10, LLC"
    sections={ sectionsList }
    socialUrl="https://front10.com"
    socials={ socialmedias }
 />`;

const children = `<Footer>
    <Row>
        <Column className="col-sm-12 col-md">
            <Copyright text="Front10, LLC" showAllRightText={false} />
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
            <img src="https://front10.com/img/logos/logo-main.png" width={80} alt="Front 10 logo" />
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
            <Social type="twitter" url="https://front10.com" gray />
            <Social type="facebook" url="https://front10.com" gray />
            <Social type="linkedin" url="https://front10.com" gray />
        </Column>
    </Row>
</Footer>`;

export { def, children };
