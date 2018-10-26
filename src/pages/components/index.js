import React from 'react';
import Link from 'gatsby-link';

import ContainerLayout from '../layouts/container';

const SecondPage = () => (
  <ContainerLayout route="/">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </ContainerLayout>
);

export default SecondPage;
