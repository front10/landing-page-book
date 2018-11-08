import React from 'react';
import PropTypes from 'prop-types';

import Main from './main';
import Container from '../components/Container';

class ContainerLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Main>
          <Container>{children}</Container>
        </Main>
      </React.Fragment>
    );
  }
}

ContainerLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
ContainerLayout.defaultProps = {
  children: null
};

export default ContainerLayout;
