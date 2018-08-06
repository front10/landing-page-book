import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  render() {
    const { fluid, children } = this.props;
    return <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>;
  }
}

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Container.defaultProps = {
  fluid: false,
  children: null
};

export default Container;
