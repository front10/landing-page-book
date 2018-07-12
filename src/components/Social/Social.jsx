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
			facebook,
			google,
			linkedin,
			twitter,
			telegram,
			whatsapp,
			pinterest,
			vk,
			ok,
			reddit,
			tumblr,
			livejournal,
			viber,
			email,
		} = this.props;
		return <div className="Social">
			{
				facebook &&
				<FacebookShareButton url={url}>
					<FacebookIcon round={rounded}/>
				</FacebookShareButton>
			}
			{
				google &&
				<GooglePlusShareButton url={url}>
					<GooglePlusIcon round={rounded}/>
				</GooglePlusShareButton>
			}
			{
				linkedin &&
				<LinkedinShareButton url={url}>
					<LinkedinIcon round={rounded}/>
				</LinkedinShareButton>
			}
			{
				twitter &&
				<TwitterShareButton url={url}>
					<TwitterIcon round={rounded}/>
				</TwitterShareButton>
			}
			{
				telegram &&
				<TelegramShareButton url={url}>
					<TelegramIcon round={rounded}/>
				</TelegramShareButton>
			}
			{
				whatsapp &&
				<WhatsappShareButton url={url}>
					<WhatsappIcon round={rounded}/>
				</WhatsappShareButton>
			}
			{
				pinterest &&
				<PinterestShareButton url={url}>
					<PinterestIcon round={rounded}/>
				</PinterestShareButton>
			}
			{
				vk &&
				<VKShareButton url={url}>
					<VKIcon round={rounded}/>
				</VKShareButton>
			}
			{
				ok &&
				<OKShareButton url={url}>
					<OKIcon round={rounded}/>
				</OKShareButton>
			}
			{
				reddit &&
				<RedditShareButton url={url}>
					<RedditIcon round={rounded}/>
				</RedditShareButton>
			}
			{
				tumblr &&
				<TumblrShareButton url={url}>
					<TumblrIcon round={rounded}/>
				</TumblrShareButton>
			}
			{
				livejournal &&
				<LivejournalShareButton url={url}>
					<LivejournalIcon round={rounded}/>
				</LivejournalShareButton>
			}
			{
				viber &&
				<ViberShareButton url={url}>
					<ViberIcon round={rounded}/>
				</ViberShareButton>
			}
			{
				email &&
				<EmailShareButton url={url}>
					<EmailIcon round={rounded}/>
				</EmailShareButton>
			}
		</div>
	}
}

Social.propTypes = {
	facebook: PropTypes.bool,
	google: PropTypes.bool,
	linkedin: PropTypes.bool,
	twitter: PropTypes.bool,
	telegram: PropTypes.bool,
	whatsapp: PropTypes.bool,
	pinterest: PropTypes.bool,
	vk: PropTypes.bool,
	ok: PropTypes.bool,
	reddit: PropTypes.bool,
	tumblr: PropTypes.bool,
	livejournal: PropTypes.bool,
	viber: PropTypes.bool,
	email: PropTypes.bool,
	rounded: PropTypes.bool,
	url: PropTypes.string,
};
Social.defaultProps = {
	facebook: true,
	google: true,
	linkedin: true,
	twitter: true,
	telegram: true,
	whatsapp: true,
	pinterest: true,
	vk: true,
	ok: true,
	reddit: true,
	tumblr: true,
	livejournal: true,
	viber: true,
	email: true,
	rounded: true,
	url: ""
};

export default Social;
