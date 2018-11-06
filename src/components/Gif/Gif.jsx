import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifPlayer from 'react-gif-player';
import withStyles from '../../helpers/WithStyles';

class Gif extends Component {
  render() {
    const { autoplay, image, preview, onPlayPause, className } = this.props;
    return (
      <div className={`Gif text-center ${className}`}>
        <GifPlayer gif={image} autoplay={autoplay} still={preview} onTogglePlay={onPlayPause} />
      </div>
    );
  }
}

Gif.propTypes = {
  /**
   * Define if gif is auto play. Default `false`
   */
  autoplay: PropTypes.bool,
  /**
   * Image gif url. Default `""`
   */
  image: PropTypes.string,
  /**
   * Initial image url. Default `""`
   */
  preview: PropTypes.string,
  /**
   * Called when gif is payed or paused
   */
  onPlayPause: PropTypes.func,
  /**
   * Class of the component. Default `""`
   */
  className: PropTypes.string
};
Gif.defaultProps = {
  autoplay: false,
  image: '',
  preview: '',
  className: '',
  onPlayPause: () => {}
};

export default withStyles(Gif);
