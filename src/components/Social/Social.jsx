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
import withStyles from '../../helpers/WithStyles';

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
    const { url, rounded, type, gray, directLink, className } = this.props;
    return directLink
      ? React.createElement(
          'a',
          {
            href: url,
            target: '_blank',
            className: `${className} SocialMediaShareButton ${
              gray ? 'SocialMediaShareButton--grayScale' : ''
            }`
          },
          React.createElement(available[type] ? available[type][1] : available.email[1], {
            round: rounded
          })
        )
      : React.createElement(
          available[type] ? available[type][0] : available.email[0],
          {
            className: `${className} ${gray ? 'SocialMediaShareButton--grayScale' : ''}`,
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
  /**
   * Define if image is gray scale.
   */
  gray: PropTypes.bool,
  /**
   * Show buttons rounded or square.
   */
  rounded: PropTypes.bool,
  /**
   * Type of button. Possibles values are: <code>'email'</code>, <code>'facebook'</code>, <code>'google'</code>, <code>'linkedin'</code>, <code>'twitter'</code>, <code>'telegram'</code>, <code>'whatsapp'</code>, <code>'pinterest'</code>, <code>'vk'</code>, <code>'ok'</code>, <code>'reddit'</code>, <code>'tumblr'</code>, <code>'livejournal'</code>, <code>'email'</code>, <code>'viber'</code>
   */
  type: PropTypes.string,
  /**
   * Url to share.
   */
  url: PropTypes.string,
  /**
   * Indicates if it is redirected to a link within the social network or a floating window is displayed to share the link using the social network.
   */
  directLink: PropTypes.bool,
  /**
   * Class to apply.
   */
  className: PropTypes.string
};
Social.defaultProps = {
  gray: false,
  rounded: true,
  type: 'email',
  url: '',
  directLink: true,
  className: ''
};

export default withStyles(Social);
