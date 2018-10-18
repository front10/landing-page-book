import React from 'react';
import PropTypes from 'prop-types';
import { GoGear } from 'react-icons/go';
import './style.scss';

class StoryHeader extends React.Component {
  render() {
    return (
      <div className="story-header-wrapper">
        <header className="story-header">
          <div className="title-wrapper">
            <h2 className="name">{this.props.name}</h2>
            <span className="divider">|</span>
            <div className="story-name-wrapper">
              <span className="story-name">{this.props.storyName}</span>
            </div>
            <div className="toolbar">
              <button className="btn-open-tooling">
                <GoGear />
              </button>
            </div>
          </div>
          <p className="description">{this.props.description}</p>
        </header>
        {/* <hr /> */}
      </div>
    );
  }
}

StoryHeader.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  storyName: PropTypes.string
};

StoryHeader.defaultProps = {
  name: 'Awesome',
  description: 'The awesome component is used to spread awesoness across the world',
  storyName: 'Default'
};

export default StoryHeader;
