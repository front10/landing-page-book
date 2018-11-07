import withStyles from '../../../../helpers/WithStyles/map.json';

export default {
  name: 'Navbar',
  summary:
    'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site.',
  import: '',
  withStyles,
  extractProps: ['link', 'brand'],
  stories: [
    {
      name: 'Basic',
      summary: '',
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
      tabsActive: ['code']
    },
    {
      name: 'Container Mode',
      summary: '',
      code: `<Navbar expand="lg" className="mb-2">
    <Container>
        <NavbarCollapse>
            <NavbarBrand>
                <Image 
                    width="120"
                    src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
                    alt="Webpack logo"
                />
            </NavbarBrand>
            <NavbarNav alignItems="right">
                <NavbarLink>Docs</NavbarLink>
                <NavbarLink>Contribute</NavbarLink>
                <NavbarLink>Blog</NavbarLink>
                <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>
                <NavbarLink><Icon icon="fa fa-github" /></NavbarLink>
                <LanguageSwitcher showArrow={false} selectedLanguage="US" />
            </NavbarNav>
        </NavbarCollapse>
    </Container>
</Navbar>`,
      tabsActive: []
    },
    {
      name: 'Reverse',
      summary: '',
      code: `<Navbar expand="lg" className="mb-2">
    <Container>
        <NavbarCollapse>
            <NavbarNav>
                <LanguageSwitcher showArrow={false} selectedLanguage="US" />
                <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>
                <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>
                <NavbarLink>Blog</NavbarLink>
                <NavbarLink>Contribute</NavbarLink>
                <NavbarLink>Docs</NavbarLink>
            </NavbarNav>
            <NavbarNav alignItems="right">
                <NavbarBrand>
                    <Image
                        width="120"
                        src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
                        alt="Webpack logo"
                    />
                </NavbarBrand>
            </NavbarNav>
        </NavbarCollapse>
    </Container>
</Navbar>`,
      tabsActive: []
    },
    {
      name: 'Via children',
      summary: '',
      code: `<Navbar expand="md">
    <NavbarCollapse>
        <NavbarBrand>
            <Image
                width="120"
                src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
                alt="Webpack logo"
            />
        </NavbarBrand>
        <NavbarNav alignItems="right">
            <NavbarLink>Docs</NavbarLink>
            <NavbarLink>Contribute</NavbarLink>
            <NavbarLink>Blog</NavbarLink>
            <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>
            <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
        </NavbarNav>
    </NavbarCollapse>
</Navbar>`,
      tabsActive: []
    },
    {
      name: 'With search',
      summary: '',
      code: `<Navbar 
    transparent={false} fixed={false} brandName="Front10" 
    brandLink="https://front10.com" brandLogo="/images/logo/front10.png" expand="md"
>
    <NavbarNav alignItems="right">
        <Input placeholder="Search" icon="fa fa-search" />
    </NavbarNav>
</Navbar>`,
      tabsActive: []
    },
    {
      name: 'With user avatar',
      summary: '',
      code: `<Navbar expand="md">
    <NavbarCollapse>
        <NavbarBrand>
            <Image
                width="120"
                src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
                alt="Webpack logo"
            />
        </NavbarBrand>
        <NavbarNav alignItems="right">
            <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>
            <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>
            <NavbarLink><Icon icon="fa fa-stack-overflow"/></NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
            <NavbarLink href="https://twitter.com/ycgarrido">
                <Image className="mr-2" rounded width="30" src="https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg"/>
                    ycgarrido
            </NavbarLink>
        </NavbarNav>
    </NavbarCollapse>
</Navbar>`,
      tabsActive: []
    }
  ]
};
