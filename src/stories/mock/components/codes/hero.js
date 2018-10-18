const def = `const buttons = [{ text: 'TELL ME MORE' }]
  
<Hero
    buttons={buttons}
    header="Landing Page Book"
    backgroundColor="#373D45"
    particlesParams={...}
    subHeader="React components to build!"
/>`;
const children = `<Hero
    backgroundColor="#373D45"
    particlesParams={...}   
>
    <Container>
        <Image
            alt="Front10 logo"
            className="main-logo"
            rounded
            src="images/logo/front10.png"
            width="160"
        />
        <Header className="text-warning">Landing Page Book</Header>
        <Header className="text-warning" type="h5">
            React components to build!
        </Header>
        <div className="mt-5">
            <Button>Explore</Button>
            <GithubButton btnText="Stars" btnType="star" />
        </div>
    </Container>
</Hero>`;

export { def, children };
