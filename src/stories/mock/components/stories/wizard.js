export default {
  name: 'Wizard',
  summary: 'Easy way to make a wizard on your website. you can guide your users step by step.',
  import: ``,
  withStyles: true,
  extractProps: ['header'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Wizard
    contentAlign="center"
    steps={[
    {
        name: 'Step 1',
        component: (
            <Container>
                <Video source="https://youtu.be/dCrLwWdju68" />
            </Container>
        )
    },
    {
        name: 'Step 2',
        component: (
            <Container>
                <Gif autoplay image="/images/gif/write.gif" />
            </Container>
        )
    },
    {
        name: 'Step 3',
        component: (
            <form>
                <FormGroup>
                    <Input label="Name" labelColon />
                </FormGroup>
                <FormGroup>
                    <Input label="Email" labelColon type="email" />
                </FormGroup>
                <FormGroup>
                    <Input label="Address" labelColon type="textarea" />
                </FormGroup>
                <Social url="https://front10.com" type="twitter" />
                <Social url="https://front10.com" type="linkedin" />
                <Social url="https://front10.com" type="google" />
                <Social url="https://front10.com" type="pinterest" />
            </form>
        )
    }
]} />`,
      tabsActive: ['code']
    }
  ]
};
