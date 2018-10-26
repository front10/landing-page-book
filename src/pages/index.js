import React from 'react';
import Main from './layouts/main';
import Container from '../components/Container';
import Header from '../components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <React.Fragment>
    <Main route="/">
      <Container>
        <Header>Landing page book Here !!!!!</Header>
      </Container>
    </Main>
  </React.Fragment>
);

export default IndexPage;
