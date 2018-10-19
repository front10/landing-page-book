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
        image="images/card/image1.jpg"
        imageCircle={false}
        imageShadow
        subTitle="Our universe"
        summary="Results from viewing Type 1a supernova have shown that the expansion
        of the universe is accelerating. Dark energy is the reason for this acceleration."
        title="Dark Energy"
      />
    </Column>
    <Column className="col-12 col-sm-6">
      <p>
        Curabitur vestibulum arcu nec nisi consequat iaculis. Etiam porttitor tincidunt
        ipsum vel maximus. Curabitur condimentum, nulla a volutpat facilisis, sem massa
        vehicula nisl, quis posuere tellus tellus nec dolor. Etiam semper orci eu hendrerit
        auctor. Pellentesque nunc odio, ultrices in accumsan sit amet, molestie a sapien.
        Suspendisse rutrum consectetur est, id porta massa tincidunt ac.
      </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet erat
        nibh, ut dignissim quam tempus dictum. Cras elementum malesuada lorem et maximus. In
        hac habitasse platea dictumst. Etiam id placerat elit. Ut non lacus pretium, aliquet
        justo quis, pulvinar risus. Proin auctor scelerisque risus nec vulputate.
        Pellentesque mollis mauris sed lectus vehicula, eget condimentum nulla porttitor.
        Aliquam nulla dui, porta sed odio quis, tincidunt ornare massa. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Duis tristique ultrices vehicula. Nunc
        viverra ligula at rhoncus consectetur. Aliquam quis risus magna. Fusce et ultricies
        elit, in fermentum erat. Donec ut finibus lacus, sit amet condimentum turpis. Ut
        bibendum felis vel suscipit laoreet.
  </p>
    </Column>
  </Row>
</Container>
</Section>`;

export { def, twoColumnText, twoColumnCards };
