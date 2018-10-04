import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

class Video extends Component {
  render() {
    const {
      source,
      playing,
      loop,
      controls,
      volume,
      muted,
      width,
      height,
      className,
      onReady,
      onStart,
      onPlay,
      onProgress,
      onDuration,
      onPause,
      onBuffer,
      onSeek,
      onEnded,
      onError
    } = this.props;
    return (
      <div className={`Video ${className}`}>
        <ReactPlayer
          url={source}
          playing={playing}
          loop={loop}
          controls={controls}
          volume={volume}
          muted={muted}
          width={width}
          height={height}
          onReady={onReady}
          onStart={onStart}
          onPlay={onPlay}
          onProgress={onProgress}
          onDuration={onDuration}
          onPause={onPause}
          onBuffer={onBuffer}
          onSeek={onSeek}
          onEnded={onEnded}
          onError={onError}
        />
      </div>
    );
  }
}

Video.propTypes = {
  playing: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  source: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  onReady: PropTypes.func,
  onStart: PropTypes.func,
  onPlay: PropTypes.func,
  onProgress: PropTypes.func,
  onDuration: PropTypes.func,
  onPause: PropTypes.func,
  onBuffer: PropTypes.func,
  onSeek: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func
};
Video.defaultProps = {
  playing: false,
  loop: false,
  controls: true,
  muted: false,
  volume: 1,
  source: '',
  width: '640px',
  height: '360px',
  className: '',
  onReady: () => {},
  onStart: () => {},
  onPlay: () => {},
  onProgress: () => {},
  onDuration: () => {},
  onPause: () => {},
  onBuffer: () => {},
  onSeek: () => {},
  onEnded: () => {},
  onError: () => {}
};

export default Video;
