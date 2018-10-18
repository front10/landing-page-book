const def = `const leftItems = [
    { href: 'https://google.com', icon: 'fa fa-google', target: '_blank', title: 'Google' },
    { href: 'https://facebook.com', icon: 'fa fa-facebook-official', target: '_blank', title: 'Facebook' }
]

const rightItems = [
    { title: 'Services' },
    { title: 'Contact' }
]

<Navbar
    brandLink="https://front10.com"
    brandLogo="images/logo/front10.png"
    className="mb-2"
    expand="md"
    leftItems={leftItems}
    rightItems={rightItems}
/>`;

const container = `<Navbar expand="md">
    <Container>
        <NavbarCollapse>
            <NavbarBrand>
                <Image
                    alt="Webpack logo"
                    src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
                    width="120"
                />
            </NavbarBrand>
            <NavbarNav alignItems="right">
                <NavbarLink> Documentation </NavbarLink>
                <NavbarLink> Contribute </NavbarLink>
                <NavbarLink>Vote</NavbarLink>
                <NavbarLink>Blog</NavbarLink>
                <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>
                <NavbarLink><Icon icon="fa fa-github" /></NavbarLink>
                <NavbarLink><Icon icon="fa fa-stack-overflow" /></NavbarLink>
                <LanguageSwitcher
                    selectedLanguage="US"
                    showArrow={false}
                />
            </NavbarNav>
        </NavbarCollapse>
    </Container>
</Navbar>`;

export { def, container };
