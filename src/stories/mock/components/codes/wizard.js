const def = `const stepslist = [
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
        <Gif autoplay image="images/gif/write.gif" />
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
];

<Wizard
    showHeader
    showHeaderBorder
    showNavigation
    prevBtnOnLastStep
    preventEnterSubmission
    startAtStep={0}
    backButtonCls={'btn btn-primary pull-left'}
    backButtonText={'Back'}
    nextButtonCls={'btn btn-primary pull-right'}
    nextButtonText={'Next'}
    nextTextOnFinalActionStep={'Next'}
    contentAlign={'left'}
    steps={stepslist}
/>
`;

export default def;
