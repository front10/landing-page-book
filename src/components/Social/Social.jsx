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
			type
		} = this.props;
		return <React.Fragment>
			{
				type === 'facebook' &&
				<FacebookShareButton url={url}>
					<FacebookIcon round={rounded}/>
				</FacebookShareButton>
			}
			{
				type === 'google' &&
				<GooglePlusShareButton url={url}>
					<GooglePlusIcon round={rounded}/>
				</GooglePlusShareButton>
			}
			{
				type === 'linkedin' &&
				<LinkedinShareButton url={url}>
					<LinkedinIcon round={rounded}/>
				</LinkedinShareButton>
			}
			{
				type === 'twitter' &&
				<TwitterShareButton url={url}>
					<TwitterIcon round={rounded}/>
				</TwitterShareButton>
			}
			{
				type === 'telegram' &&
				<TelegramShareButton url={url}>
					<TelegramIcon round={rounded}/>
				</TelegramShareButton>
			}
			{
				type === 'whatsapp' &&
				<WhatsappShareButton url={url}>
					<WhatsappIcon round={rounded}/>
				</WhatsappShareButton>
			}
			{
				type === 'pinterest' &&
				<PinterestShareButton url={url}
				                      media="Share in Pinterest">
					<PinterestIcon round={rounded}/>
				</PinterestShareButton>
			}
			{
				type === 'vk' &&
				<VKShareButton url={url}>
					<VKIcon round={rounded}/>
				</VKShareButton>
			}
			{
				type === 'ok' &&
				<OKShareButton url={url}>
					<OKIcon round={rounded}/>
				</OKShareButton>
			}
			{
				type === 'reddit' &&
				<RedditShareButton url={url}>
					<RedditIcon round={rounded}/>
				</RedditShareButton>
			}
			{
				type === 'tumblr' &&
				<TumblrShareButton url={url}>
					<TumblrIcon round={rounded}/>
				</TumblrShareButton>
			}
			{
				type === 'livejournal' &&
				<LivejournalShareButton url={url}>
					<LivejournalIcon round={rounded}/>
				</LivejournalShareButton>
			}
			{
				type === 'viber' &&
				<ViberShareButton url={url}>
					<ViberIcon round={rounded}/>
				</ViberShareButton>
			}
			{
				type === 'email' &&
				<EmailShareButton url={url}>
					<EmailIcon round={rounded}/>
				</EmailShareButton>
			}
		</React.Fragment>
	}
}

Social.propTypes = {
	type: PropTypes.string,
	rounded: PropTypes.bool,
	url: PropTypes.string,
};
Social.defaultProps = {
	type: "email",
	rounded: true,
	url: ""
};

export default Social;
