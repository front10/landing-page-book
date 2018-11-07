export default {
  name: 'Hero',
  summary:
    "The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content.",
  import: ``,
  extractProps: ['header', 'subHeader', 'callToAction', 'secondaryCallToAction'],
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
    minHeight="75vh"
    headerTextColor="warning"
    subHeaderTextColor="warning"
    callToActionColor="warning"
    secondaryCallToActionColor="warning"
    secondaryCallToActionMarginLeft="2"
    callToAction="Call to action"
    secondaryCallToAction="Secondary call to action"
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Via children',
      summary: '',
      code: `<Hero opacity={1} overlayColor="#373D45" particlesSugar="crazyStars" minHeight="75vh">
    <Container>
        <Image src="/images/logo/front10.png" rounded width="160" alt="Front10 logo" className="main-logo"/>
        <Header textAlign="center" className="text-warning">Landing Page Book</Header>
        <Header  textAlign="center" type="h5" className="text-warning">React components to build!</Header>
        <div className="mt-5">
            <Button color="warning" className="mr-1">Explore</Button>
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
    particles={false}
    minHeight="50vh"
>
    <Container>
        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
        <div className="text-left">
            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">
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
    particles={false}
    imgFilter="blur(2px)"
    minHeight="50vh"
>
    <Container>
        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
        <div className="text-left">
            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">
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
    particles={false}
    imgFilter="grayscale(90%)"
    minHeight="50vh"
>
    <Container>
        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>
        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>
        <div className="text-left">
            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">
                READ MORE
            </Link>
        </div>
    </Container>
</Hero>`,
      tabsActive: []
    }
  ]
};
