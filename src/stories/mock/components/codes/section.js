const def = ` <Section
    gray={boolean('Gray', true)}
    title={text('Title', 'Introduction')}
    subTitle={text('Subtitle', 'Once upon a time...')}>
    <Container className="text-left">
        <p style={pStyle}>
            Once upon a time, there was a boy named James. He always got pushed around. One day, a
            wizard appeared in front of the boy. The wizard gave James three wishes. One of James
            wishes was that tge wizard could make James go away. The next day James tried to make a
            wish, but he found himself to be in the land of the forgotten.
        </p>
    </Container>
</Section>`;
const video = ` <Section
    subTitle="One Look Is Worth A Thousand Words."
    title="WHAT WE DO">
    <Container className="text-center">
        <Video source="https://youtu.be/dCrLwWdju68" />
        <Button className="mt-5">Explore</Button>
    </Container>
</Section>`;

export { def, video };
