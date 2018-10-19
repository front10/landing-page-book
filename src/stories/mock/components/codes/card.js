const def = `<Card
    contentAlign="left"
    image="images/card/image1.jpg"
    imageCircle={false}
    imageShadow
    summary="Sky is often defined as the space in which the stars move and by visual effect seems to surround the Earth. In astronomy, sky is synonymous with the celestial sphere: an imaginary vault on which the Sun, stars, planets and the Moon are distributed."
    title="Sky"
/>`;
const subtitle = `<Card
    contentAlign="left"
    image="images/card/image2.jpg"
    imageCircle={false}
    imageShadow
    subTitle="First man in the moon"
    summary="American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor."
    title="Neil Armstrong"
/>`;
const summary = `<Card
    contentAlign="left"
    image="images/card/image3.jpg"
    imageCircle={false}
    imageShadow
    shadow
    summary="The galaxy of the Milky Way, or simply the Milky Way, is a spiral galaxy where the solar system is located and in turn the Earth is located. According to the observations, it has a mass of 10¹² solar masses and is a barred spiral."
    summaryJustified
/>`;
const footer = ` <Card
    contentAlign="left"
    image="images/card/image4.jpg"
    imageCircle={false}
    imageShadow
    summary="Saturn is the sixth planet in the solar system, the second in size and mass after Jupiter and the only one with a ring system visible from Earth. Its name comes from the Roman god Saturn. It is part of the so-called outer or gaseous planets."
    summaryJustified
    title="Saturn">
    <Row>
        <Column className="text-left">
            <Link
                href="https://es.wikipedia.org/wiki/Saturno_(planeta)"
                target="_blank">
                See more
            </Link>
        </Column>
        <Column className="text-right">
            <span className="text-muted">21 views</span>
        </Column>
    </Row>
</Card>`;
const floating = `<Card
    image="images/card/image5.jpg"
    imageCircle={false}
    imageShadow
    showBorder={false}
    summary="A star is a luminous plasma sphere that maintains its shape thanks to its own gravity. The closest star to Earth is the Sun."
/>`;

export { def, subtitle, summary, footer, floating };
