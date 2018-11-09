import React from 'react';
import Main from '../gatsby-layouts/main';
import AnimatedHero from '../stories/mock/components/data/hero';
import { Row, Column } from '../components';

const NotFoundPage = () => (
  <Main>
    <div className="container p-4 mt-5 page">
      <Row>
        <Column className="col col-12 col-md-6 box-error d-md-none d-lg-block">
          <AnimatedHero />
        </Column>
        <Column className="col col-12 col-lg-6">
          <div className="text-404 text-left">
            <div>
              <h1>PAGE NOT FOUND</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <p>Return to our home page</p>
              <a href="/" className="btn btn-primary">
                Home
              </a>
            </div>
          </div>
        </Column>
      </Row>
    </div>
  </Main>
);

export default NotFoundPage;
