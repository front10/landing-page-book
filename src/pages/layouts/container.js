import React from 'react';
import Link from 'gatsby-link';

import Main from './main';
import Container from '../../components/Container';

export default ({ children, route }) => (
  <React.Fragment>
    <Main route={route}>
      <Container>{children}</Container>
    </Main>
  </React.Fragment>
);
