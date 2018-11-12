import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifPlayer from 'react-gif-player';
import withStyles from '../../helpers/WithStyles';

class Gif extends Component {
  render() {
    const { autoplay, image, preview, onPlayPause, className, style } = this.props;
    return (
      <div className={`Gif text-center ${className}`} style={style}>
        <GifPlayer gif={image} autoplay={autoplay} still={preview} onTogglePlay={onPlayPause} />
      </div>
    );
  }
}

Gif.propTypes = {
  /**
   * Define if gif is auto play
   */
  autoplay: PropTypes.bool,
  /**
   * Image gif url
   */
  image: PropTypes.string,
  /**
   * Initial image url
   */
  preview: PropTypes.string,
  /**
   * Called when gif is payed or paused
   */
  onPlayPause: PropTypes.func,
  /**
   * Class of the component
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any)
};
Gif.defaultProps = {
  autoplay: false,
  image: '',
  preview: '',
  className: '',
  style: null,
  onPlayPause: () => {}
};

export default withStyles(Gif);
