import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  LivejournalShareButton,
  LivejournalIcon,
  ViberShareButton,
  ViberIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

const available = {
  facebook: [FacebookShareButton, FacebookIcon],
  google: [GooglePlusShareButton, GooglePlusIcon],
  linkedin: [LinkedinShareButton, LinkedinIcon],
  twitter: [TwitterShareButton, TwitterIcon],
  telegram: [TelegramShareButton, TelegramIcon],
  whatsapp: [WhatsappShareButton, WhatsappIcon],
  pinterest: [PinterestShareButton, PinterestIcon],
  vk: [VKShareButton, VKIcon],
  ok: [OKShareButton, OKIcon],
  tumblr: [TumblrShareButton, TumblrIcon],
  livejournal: [LivejournalShareButton, LivejournalIcon],
  viber: [ViberShareButton, ViberIcon],
  email: [EmailShareButton, EmailIcon],
  reddit: [RedditShareButton, RedditIcon]
};

class Social extends Component {
  render() {
    const { url, rounded, type, gray } = this.props;
    return React.createElement(
      available[type] ? available[type][0] : available.email[0],
      {
        className: `${gray ? 'SocialMediaShareButton--grayScale' : ''}`,
        url,
        media: 'Share in Pinterest'
      },
      React.createElement(available[type] ? available[type][1] : available.email[1], {
        round: rounded
      })
    );
  }
}

Social.propTypes = {
  gray: PropTypes.bool,
  rounded: PropTypes.bool,
  type: PropTypes.string,
  url: PropTypes.string
};
Social.defaultProps = {
  gray: false,
  rounded: true,
  type: 'email',
  url: ''
};

export default Social;
