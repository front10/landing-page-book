const ctaButtonStyles = {
  color: 'white',
  border: '2px solid white',
  padding: '5px 15px',
  float: 'left'
};

// export default {
//   name: 'Hero',
//   summary:
//     "The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content.",
//   import: ``,
//   stories: []
// };

export default {
  name: 'Hero',
  summary:
    "The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content.",
  import: ``,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Hero
    opacity={1}
    overlayColor="#373D45"
    header="Landing Page Book"
    subHeader="React components to build!"
    particlesSugar="crazyStars"
    buttons={[
        { text: 'TELL ME MORE', onClick: () => { } }
    ]}
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Via children',
      summary: '',
      code: `<Hero opacity={1} overlayColor="#373D45" particlesSugar="crazyStars">
    <Container>
        <Image src="/images/logo/front10.png" rounded width="160" alt="Front10 logo" className="main-logo"/>
        <Header className="text-warning">Landing Page Book</Header>
        <Header type="h5" className="text-warning">React components to build!</Header>
        <div className="mt-5">
            <Button>Explore</Button>
            <GithubButton btnType="star" btnText="Stars" username="front10" repository="landing-page-book"/>
        </div>
    </Container>
</Hero>`,
      tabsActive: []
    },
    {
      name: 'With image',
      summary: '',
      code: `<Hero
    image="/images/hero/alone-architecture-buildings-220444.jpg"
    parallaxOffset={350}
    particles={false}
>
    <Container>
        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
        <div className="">
            <Link
                href="https://front10.com"
                style={${JSON.stringify(ctaButtonStyles)}}
                target="_blank">
                    READ MORE
            </Link>
        </div>
    </Container>
</Hero>`,
      tabsActive: []
    },
    {
      name: 'With image (blurred)',
      summary: '',
      code: `<Hero
    image="/images/hero/alone-architecture-buildings-220444.jpg"
    parallaxOffset={350}
    particles={false}
    imgFilter="blur(2px)"
>
    <Container>
        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
        <div className="">
            <Link
                href="https://front10.com"
                style={${JSON.stringify(ctaButtonStyles)}}
                target="_blank">
                READ MORE
            </Link>
        </div>
    </Container>
</Hero>`,
      tabsActive: []
    },
    {
      name: 'With image (gray)',
      summary: '',
      code: `<Hero
    image="/images/hero/alone-architecture-buildings-220444.jpg"
    parallaxOffset={350}
    particles={false}
    imgFilter="grayscale(90%)"
>
    <Container>
        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
        <div className="">
            <Link
                href="https://front10.com"
                style={${JSON.stringify(ctaButtonStyles)}}
                target="_blank">READ MORE
            </Link>
        </div>
    </Container>
</Hero>`,
      tabsActive: []
    }
  ]
};
