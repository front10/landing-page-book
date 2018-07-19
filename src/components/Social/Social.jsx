import React, {Component} from 'react';
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

class Social extends Component {

	render() {
		const {
			url,
			rounded,
			type,
			gray
		} = this.props;
		return <React.Fragment>
			{
				type === 'facebook' &&
				<FacebookShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<FacebookIcon round={rounded}/>
				</FacebookShareButton>
			}
			{
				type === 'google' &&
				<GooglePlusShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<GooglePlusIcon round={rounded}/>
				</GooglePlusShareButton>
			}
			{
				type === 'linkedin' &&
				<LinkedinShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<LinkedinIcon round={rounded}/>
				</LinkedinShareButton>
			}
			{
				type === 'twitter' &&
				<TwitterShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<TwitterIcon round={rounded}/>
				</TwitterShareButton>
			}
			{
				type === 'telegram' &&
				<TelegramShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<TelegramIcon round={rounded}/>
				</TelegramShareButton>
			}
			{
				type === 'whatsapp' &&
				<WhatsappShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<WhatsappIcon round={rounded}/>
				</WhatsappShareButton>
			}
			{
				type === 'pinterest' &&
				<PinterestShareButton url={url}
				                      media="Share in Pinterest"
				                      className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<PinterestIcon round={rounded}/>
				</PinterestShareButton>
			}
			{
				type === 'vk' &&
				<VKShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<VKIcon round={rounded}/>
				</VKShareButton>
			}
			{
				type === 'ok' &&
				<OKShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<OKIcon round={rounded}/>
				</OKShareButton>
			}
			{
				type === 'reddit' &&
				<RedditShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<RedditIcon round={rounded}/>
				</RedditShareButton>
			}
			{
				type === 'tumblr' &&
				<TumblrShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<TumblrIcon round={rounded}/>
				</TumblrShareButton>
			}
			{
				type === 'livejournal' &&
				<LivejournalShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<LivejournalIcon round={rounded}/>
				</LivejournalShareButton>
			}
			{
				type === 'viber' &&
				<ViberShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<ViberIcon round={rounded}/>
				</ViberShareButton>
			}
			{
				type === 'email' &&
				<EmailShareButton url={url} className={`${gray ? 'SocialMediaShareButton--grayScale': ''}`}>
					<EmailIcon round={rounded}/>
				</EmailShareButton>
			}
		</React.Fragment>
	}
}

Social.propTypes = {
	gray: PropTypes.bool,
	rounded: PropTypes.bool,
	type: PropTypes.string,
	url: PropTypes.string,
};
Social.defaultProps = {
	gray: false,
	rounded: true,
	type: "email",
	url: ""
};

export default Social;
