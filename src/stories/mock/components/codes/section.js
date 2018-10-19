const def = ` <Section
    subTitle="One Look Is Worth A Thousand Words."
    title="WHAT WE DO"
>
    <Container className="text-center">
        <Video source="https://youtu.be/dCrLwWdju68" />
        <Button className="mt-5">Explore</Button>
    </Container>
</Section>`;

const twoColumnText = `<Section
  subTitle="One Look Is Worth A Thousand Words."
  title="WHAT WE DO"
>
  <Container className="text-justify">
    <Row>
      <Column className="col-12 col-sm-6">
        <p>
        Once upon a time, there was a boy named James. He always got pushed around. One day,
        a wizard appeared in front of the boy. The wizard gave James three wishes. One of
        James wishes was that tge wizard could make James go away. The next day James tried
        to make a wish, but he found himself to be in the land of the forgotten.
        </p>
      </Column>
      <Column className="col-12 col-sm-6">
        <p>
        Once upon a time, there was a boy named James. He always got pushed around. One day,
        a wizard appeared in front of the boy. The wizard gave James three wishes. One of
        James wishes was that tge wizard could make James go away. The next day James tried
        to make a wish, but he found himself to be in the land of the forgotten.
        </p>
      </Column>
    </Row>
  </Container>
</Section>`;

const twoColumnCards = `<Section
subTitle="One Look Is Worth A Thousand Words."
title="WHAT WE DO"
>
<Container className="text-justify">
  <Row>
    <Column className="col-12 col-sm-6">
      <Card
        contentAlign="left"
        image="images/card/image2.jpg"
        imageCircle={false}
        imageShadow
        subTitle="First man in the moon"
        summary="American astronaut and aeronautical engineer who was the first 
        person to walk on the Moon. He was also a naval aviator, test pilot, and
        university professor."
        title="Neil Armstrong"
      />
    </Column>
    <Column className="col-12 col-sm-6">
      <Card
        contentAlign="left"
        image="images/card/image1.jpg"
        imageCircle={false}
        imageShadow
        subTitle="Our universe"
        summary="Results from viewing Type 1a supernova have shown that the expansion
        of the universe is accelerating. Dark energy is the reason for this acceleration."
        title="Dark Energy"
      />
    </Column>
  </Row>
</Container>
</Section>`;

export { def, twoColumnText, twoColumnCards };
