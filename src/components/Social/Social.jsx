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
    const { url, rounded, type, gray, directLink } = this.props;
    return directLink
      ? React.createElement(
          'a',
          {
            href: url,
            target: '_blank',
            className: `SocialMediaShareButton ${gray ? 'SocialMediaShareButton--grayScale' : ''}`
          },
          React.createElement(available[type] ? available[type][1] : available.email[1], {
            round: rounded
          })
        )
      : React.createElement(
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
  /**
   * Define if image is gray scale. Default `false`
   */
  gray: PropTypes.bool,
  /**
   * Show buttons rounded or square. Default `true`
   */
  rounded: PropTypes.bool,
  /**
   * Type of button. Default `"email"`, possibles values are: `facebook`, `google`, `linkedin`, `twitter`, `telegram`, `whatsapp`, `pinterest`, `vk`, `ok`, `reddit`, `tumblr`, `livejournal`, `email`, `viber`
   */
  type: PropTypes.string,
  /**
   * Url to share. Default `""`
   */
  url: PropTypes.string,
  /**
   * Indicates if it is redirected to a link within the social network or a floating window is displayed to share the link using the social network. Default `true`
   */
  directLink: PropTypes.bool
};
Social.defaultProps = {
  gray: false,
  rounded: true,
  type: 'email',
  url: '',
  directLink: true
};

export default Social;
