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
        <Image src="/images/logo/front10.png" rounded width="160" alt="Front10 logo"/>
        <Header textAlign="center" textColor="warning">Landing Page Book</Header>
        <Header textAlign="center" type="h5" textColor="warning">React components to build!</Header>
        <div className="mt-5">
            <Button color="warning" marginRight="1">Explore</Button>
            <GithubButton type="star" text="Stars" username="front10" repository="landing-page-book"/>
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
        <Header type="h6" textColor="white" textAlign="left">LANDING PAGE BOOK</Header>
        <Header textColor="white" textAlign="left" marginTop="4" marginBottom="4">React UI Kit to easily build landing pages.</Header>
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
        <Header type="h6" textColor="white" textAlign="left">LANDING PAGE BOOK</Header>
        <Header textColor="white" textAlign="left" marginTop="4" marginBottom="4">React UI Kit to easily build landing pages.</Header>
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
        <Header type="h6" textColor="white" textAlign="left">LANDING PAGE BOOK</Header>
        <Header textColor="white" textAlign="left" marginTop="4" marginBottom="4">React UI Kit to easily build landing pages.</Header>
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
