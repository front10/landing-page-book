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
  /**
   * Set to true or false to pause or play the media. Default `false`
   */
  playing: PropTypes.bool,
  /**
   * Set to true or false to loop the media. Default `false`
   */
  loop: PropTypes.bool,
  /**
   * Set to true or false to display native player controls. Vimeo, Twitch and Wistia player will always display controls. Default `false`
   */
  controls: PropTypes.bool,
  /**
   * Mutes the player. Default `false`
   */
  muted: PropTypes.bool,
  /**
   * Set the volume of the player, between 0 and 1. Default `1`
   */
  volume: PropTypes.number,
  /**
   * The url of a video or song to play. Default `""`
   */
  source: PropTypes.string,
  /**
   * Class to apply to button. Default `""`
   */
  className: PropTypes.string,
  /**
   * Called when media is loaded and ready to play. If playing is set to true, media will play immediately
   */
  onReady: PropTypes.func,
  /**
   * Called when media starts playing
   */
  onStart: PropTypes.func,
  /**
   * Called when media starts or resumes playing after pausing or buffering
   */
  onPlay: PropTypes.func,
  /**
   * Callback containing played and loaded progress as a fraction (`{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }`)
   */
  onProgress: PropTypes.func,
  /**
   * Callback containing duration of the media, in seconds
   */
  onDuration: PropTypes.func,
  /**
   * Called when media is paused
   */
  onPause: PropTypes.func,
  /**
   * Called when media starts buffering
   */
  onBuffer: PropTypes.func,
  /**
   * Called when media seeks with seconds parameter
   */
  onSeek: PropTypes.func,
  /**
   * Called when media finishes playing
   */
  onEnded: PropTypes.func,
  /**
   * Called when an error occurs whilst attempting to play media
   */
  onError: PropTypes.func
};
Video.defaultProps = {
  playing: false,
  loop: false,
  controls: true,
  muted: false,
  volume: 1,
  source: '',
  className: '',
  onReady: () => { },
  onStart: () => { },
  onPlay: () => { },
  onProgress: () => { },
  onDuration: () => { },
  onPause: () => { },
  onBuffer: () => { },
  onSeek: () => { },
  onEnded: () => { },
  onError: () => { }
};

export default Video;
