import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  render() {
    const { fluid, className, children } = this.props;
    return (
      <div className={`${className} ${fluid ? 'container-fluid' : 'container'}`}>{children}</div>
    );
  }
}

Container.propTypes = {
  /**
   * A fluid container is shown. Default `false`
   */
  fluid: PropTypes.bool,
  /**
   * Class of the component. Default `""`
   */
  className: PropTypes.string,
  /**
   * Childrens
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Container.defaultProps = {
  fluid: false,
  children: null,
  className: ''
};

export default Container;
