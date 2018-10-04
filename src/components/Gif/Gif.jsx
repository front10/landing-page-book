import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifPlayer from 'react-gif-player';

class Gif extends Component {
  render() {
    const { autoplay, image, preview, onPlayPause } = this.props;
    return (
      <div className="Gif text-center">
        <GifPlayer gif={image} autoplay={autoplay} still={preview} onTogglePlay={onPlayPause} />
      </div>
    );
  }
}

Gif.propTypes = {
  autoplay: PropTypes.bool,
  image: PropTypes.string,
  preview: PropTypes.string,
  onPlayPause: PropTypes.func
};
Gif.defaultProps = {
  autoplay: false,
  image: '',
  preview: '',
  onPlayPause: () => {}
};

export default Gif;
