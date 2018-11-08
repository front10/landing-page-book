export default {
  name: 'Card',
  summary:
    'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Card
    summaryJustified={false}
    title="Sky"
    subTitle=""
    summary="Sky is often defined as the space in which the stars move and by visual effect seems to surround the Earth. In astronomy, sky is synonymous with the celestial sphere: an imaginary vault on which the Sun, stars, planets and the Moon are distributed."
    image="https://front10.com/landing-page-book/images/card/image1.jpg"
/>`,
      tabsActive: ['code'],
      cssVariables: [
        '--Card-borderRadius',
        '--Card__Summary-fontSize',
        '--Card__Summary-color',
        '--Card__Summary-backgroundColor',
        '--Card__Title-fontSize',
        '--Card__Title-color',
        '--Card__Subtitle-fontSize',
        '--Card__Subtitle-color',
        '--Card-boxShadow'
      ],
      columnSize: 'col col-md-6',
      columnAlign: 'center'
    },
    {
      name: 'With Subtitle',
      summary: '',
      code: `<Card
    title="Neil Armstrong"
    subTitle="First man in the moon"
    summary="American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor."
    image="https://front10.com/landing-page-book/images/card/image2.jpg"
/>`,
      tabsActive: [],
      cssVariables: [
        '--Card-borderRadius',
        '--Card__Summary-fontSize',
        '--Card__Summary-color',
        '--Card__Summary-backgroundColor',
        '--Card__Title-fontSize',
        '--Card__Title-color',
        '--Card__Subtitle-fontSize',
        '--Card__Subtitle-color',
        '--Card-boxShadow'
      ],
      columnSize: 'col col-md-6',
      columnAlign: 'center'
    },
    {
      name: 'Only summary',
      summary: '',
      code: `<Card
    shadow
    summaryJustified
    title=""
    subTitle=""
    summary="The galaxy of the Milky Way, or simply the Milky Way, is a spiral galaxy where the solar system is located and in turn the Earth is located. According to the observations, it has a mass of 10¹² solar masses and is a barred spiral."
    image="https://front10.com/landing-page-book/images/card/image3.jpg"
/>`,
      tabsActive: [],
      cssVariables: [
        '--Card-borderRadius',
        '--Card__Summary-fontSize',
        '--Card__Summary-color',
        '--Card__Summary-backgroundColor',
        '--Card__Title-fontSize',
        '--Card__Title-color',
        '--Card__Subtitle-fontSize',
        '--Card__Subtitle-color',
        '--Card-boxShadow'
      ],
      columnSize: 'col col-md-6',
      columnAlign: 'center'
    },
    {
      name: 'With Footer',
      summary: '',
      code: `<React.Fragment>
    <Card
        title="Saturn"
        subTitle=""
        summary="Saturn is the sixth planet in the solar system, the second in size and mass after Jupiter and the only one with a ring system visible from Earth. Its name comes from the Roman god Saturn. It is part of the so-called outer or gaseous planets."
        image="https://front10.com/landing-page-book/images/card/image4.jpg"
    >
        <Row>
            <Column>
                <Link href="https://es.wikipedia.org/wiki/Saturno_(planeta)" target="_blank">See more</Link>
            </Column>
            <Column>
                <span className="text-muted">21 views</span>
            </Column>
        </Row>
    </Card>
</React.Fragment>`,
      tabsActive: [],
      cssVariables: [
        '--Card-borderRadius',
        '--Card__Summary-fontSize',
        '--Card__Summary-color',
        '--Card__Summary-backgroundColor',
        '--Card__Title-fontSize',
        '--Card__Title-color',
        '--Card__Subtitle-fontSize',
        '--Card__Subtitle-color',
        '--Card-boxShadow'
      ],
      columnSize: 'col col-md-6',
      columnAlign: 'center'
    },
    {
      name: 'Floating image',
      summary: '',
      code: `<Card
    borderNone={true}
    summary="A star is a luminous plasma sphere that maintains its shape thanks to its own gravity. The closest star to Earth is the Sun."
    image="https://front10.com/landing-page-book/images/card/image5.jpg"
/>`,
      tabsActive: [],
      cssVariables: [
        '--Card-borderRadius',
        '--Card__Summary-fontSize',
        '--Card__Summary-color',
        '--Card__Summary-backgroundColor',
        '--Card__Title-fontSize',
        '--Card__Title-color',
        '--Card__Subtitle-fontSize',
        '--Card__Subtitle-color',
        '--Card-boxShadow'
      ],
      columnSize: 'col col-md-6',
      columnAlign: 'center'
    }
  ]
};
