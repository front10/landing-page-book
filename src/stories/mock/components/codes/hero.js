const def = `const buttons = [{ text: 'TELL ME MORE' }]
  
<Hero
    buttons={buttons}
    header="Landing Page Book"
    backgroundColor="#373D45"
    particlesParams={...}
    subHeader="React components to build!"
/>`;
const children = `<Hero
    backgroundColor="#373D45"
    particlesParams={...}   
>
    <Container>
        <Image
            alt="Front10 logo"
            className="main-logo"
            rounded
            src="images/logo/front10.png"
            width="160"
        />
        <Header className="text-warning">Landing Page Book</Header>
        <Header className="text-warning" type="h5">
            React components to build!
        </Header>
        <div className="mt-5">
            <Button>Explore</Button>
            <GithubButton btnText="Stars" btnType="star" />
        </div>
    </Container>
</Hero>`;

const image = `<Hero
    image="images/hero/alone-architecture-buildings-220444.jpg"
    parallaxOffset={350}
    particles={false}>
    <Container>
        <Header className="text-white text-left" type="h6">
            LANDING PAGE BOOK
        </Header>
        <Header className="text-white text-left mt-4 mb-4">
            React UI Kit to easily build landing pages.
        </Header>
        <div className="">
            <Link
                href="https://front10.com"
                tooltip="This is a tooltip">
                READ MORE
            </Link>
        </div>
    </Container>
</Hero>`;

const products = `<Hero
    backgroundColor="rgba(57,55,77,0.9)"
    parallaxOffset={350}
    particles={false}>
    <Container className="p-5">
        <Row>
            <Column className="col-md-3 d-none d-md-block">
                <Image src="images/hero/front10-iphone.svg" />
            </Column>
            <Column className="col-md-9 mt-5">
                <div className="pt-3">
                    <Image
                        alt="Front10 logo"
                        className="float-left"
                        rounded
                        src="images/logo/front10.png"
                        width="40"/>
                    <Header
                        className="text-warning float-left pl-2 mt-3"
                        type="h5">
                        LANDING PAGE BOOK
                    </Header>
                </div>
                <div className="clearfix" />
                <Header
                    className="text-white text-left d-block pt-2"
                    type="h2">
                    Use the platform you prefer, Create React App, Gatsby or Next.
                </Header>
                <div className="text-left mt-3">
                    <Link
                        href="https://front10.com/get-landing-page-book/"
                        target="_blank"
                        tooltip="Search in NPM">
                        <span className="Button btn">
                            Explore library  
                            <Icon icon="fa fa-arrow-right" />
                        </span>
                    </Link>
                </div>
            </Column>
        </Row>
    </Container>
</Hero>`;

const minimal = `<Hero
    backgroundColor="#FFFFFF"
    parallaxOffset={350}
    particles={false}>
    <Container className="p-5">
        <Row>
            <Column className="col-12 col-md-7">
                <Image src="images/hero/persons.png" />
            </Column>
            <Column className="col-12 col-md-5">
                <h1 className="float-left text-left mt-3">
                    Landing Page Book
                </h1>
                <p>
                    Landing page book it’s an react components library with more than 40 components and elements, is based en react 16.2 and was wrote with ES6.
                </p>
                <Row>
                    <Column className="col-sm-8 mt-5 pl-1 pr-1">
                        <input
                            placeholder="Email address"
                            type="email"/>
                    </Column>
                    <Column className="col-sm-4 mt-5 pl-1 pr-1">
                        <input
                            className="Button"
                            tooltip="Send email"
                            type="button"
                            value="GET STARTED"/>
                    </Column>
                </Row>
            </Column>
        </Row>
    </Container>
</Hero>`;

export { def, children, image, products, minimal };
