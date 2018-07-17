import React from 'react';
import PropTypes from 'prop-types';

class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

        this.setState({            
        showImage: this.props.showImage,
        cardClass: this.props.cardClass,
        imageSrc: this.props.imageSrc,
        imageClass: this.props.imageClass,
        imageAlt: this.props.imageAlt,
        showTitle: this.props.showTitle,
        titleText: this.props.titleText,
        titleClass: this.props.titleClass,
        showSubTitle: this.props.showSubTitle,
        subTitleText: this.props.subTitleText,
        subTitleClass: this.props.subTitleClass,
        showDescriptionText: this.props.showDescriptionText,
        descriptionText: this.props.descriptionText,
        descriptionClass: this.props.descriptionClass,
        showFooter: this.props.showFooter,
        footerClass: this.props.footerClass,
        showFooterLink: this.props.showFooterLink,
        footerLinkText: this.props.footerLinkText,
        footerLinkClass: this.props.footerLinkClass,
        footerLinkHref: this.props.footerLinkHref
        });
        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.showImage !== this.state.showImage)
        this.setState({showImage: nextProps.showImage});
        if(nextProps.cardClass !== this.state.cardClass)
        this.setState({cardClass: nextProps.cardClass});
        if(nextProps.imageSrc !== this.state.imageSrc)
        this.setState({imageSrc: nextProps.imageSrc});
        if(nextProps.imageClass !== this.state.imageClass)
        this.setState({imageClass: nextProps.imageClass});
        if(nextProps.imageAlt !== this.state.imageAlt)
        this.setState({imageAlt: nextProps.imageAlt});
        if(nextProps.showTitle !== this.state.showTitle)
        this.setState({showTitle: nextProps.showTitle});
        if(nextProps.titleText !== this.state.titleText)
        this.setState({titleText: nextProps.titleText});
        if(nextProps.titleClass !== this.state.titleClass)
        this.setState({titleClass: nextProps.titleClass});
        if(nextProps.showSubTitle !== this.state.showSubTitle)
        this.setState({showSubTitle: nextProps.showSubTitle});
        if(nextProps.subTitleText !== this.state.subTitleText)
        this.setState({subTitleText: nextProps.subTitleText});
        if(nextProps.subTitleClass !== this.state.subTitleClass)
        this.setState({subTitleClass: nextProps.subTitleClass});
        if(nextProps.showDescriptionText !== this.state.showDescriptionText)
        this.setState({showDescriptionText: nextProps.showDescriptionText});
        if(nextProps.descriptionText !== this.state.descriptionText)
        this.setState({descriptionText: nextProps.descriptionText});
        if(nextProps.descriptionClass !== this.state.descriptionClass)
        this.setState({descriptionClass: nextProps.descriptionClass});
        if(nextProps.showFooter !== this.state.showFooter)
        this.setState({showFooter: nextProps.showFooter});
        if(nextProps.footerClass !== this.state.footerClass)
        this.setState({footerClass: nextProps.footerClass});
        if(nextProps.footerLinkText !== this.state.footerLinkText)
        this.setState({footerLinkText: nextProps.footerLinkText});
        if(nextProps.showFooterLink !== this.state.showFooterLink)
        this.setState({showFooterLink: nextProps.showFooterLink});
        if(nextProps.footerLinkClass !== this.state.footerLinkClass)
        this.setState({footerLinkClass: nextProps.footerLinkClass});
        if(nextProps.footerLinkHref !== this.state.footerLinkHref)
        this.setState({footerLinkHref: nextProps.footerLinkHref});
        
    }

    render() {

        return (<div>
            <div className={`card ${this.state.cardClass}`}>
            { this.state.showImage &&
                <img className={`card-img-top ${this.state.imageClass}`} src={ this.state.imageSrc} alt={this.state.imageAlt}/>
            }
            <div className="card-body">
            { this.state.showTitle &&

                <h4 className={`card-title ${this.state.titleClass}`}>{this.state.titleText}</h4>
            }
            { this.state.showSubTitle &&
                <h6 className={`card-subtitle mb-2 text-muted ${this.state.subTitleClass}`}>{this.state.subTitleText}</h6>
            }
            { this.state.showDescriptionText &&

                <p className={`card-text ${this.state.descriptionClass}`}>
                {this.state.descriptionText}
                </p>
            }
            </div>
            { this.state.showFooter &&

            <div className={`card-footer ${this.state.footerClass}`}>
            { this.state.showFooterLink &&
                <a href={this.state.footerLinkHref} className={`card-link ${this.state.footerLinkClass}`}>{this.state.footerLinkText}</a>
            }
            </div>
            }
            </div>
        </div> );

    }
}

Features.propTypes = {
    cardClass: PropTypes.string,
    showImage: PropTypes.bool,
    imageSrc: PropTypes.string,
    imageClass: PropTypes.string,
    imageAlt: PropTypes.string,
    showTitle: PropTypes.bool,
    titleText: PropTypes.string,
    titleClass: PropTypes.string,
    showSubTitle: PropTypes.bool,
    subTitleText: PropTypes.string,
    subTitleClass: PropTypes.string,
    showDescriptionText: PropTypes.bool,
    descriptionText: PropTypes.string,
    descriptionClass: PropTypes.string,
    showFooter: PropTypes.bool,
    footerClass: PropTypes.string,
    showFooterLink: PropTypes.bool,
    footerLinkText: PropTypes.string,
    footerLinkClass: PropTypes.string,
    footerLinkHref: PropTypes.string
};

Features.defaultProps = {
    cardClass: "",
    showImage: true,
    imageSrc: "images/features/dashboard.png",
    imageClass: "",
    imageAlt: "Feature image",
    showTitle: true,
    titleText: "Feature",
    titleClass: "",
    showSubTitle: true,
    subTitleText: "ReactJs Component",
    subTitleClass: "",
    showDescriptionText: true,
    descriptionText: "React component to show all your project features!",
    descriptionClass: "",
    showFooter: true,
    footerClass: "",
    showFooterLink: "See more...",
    footerLinkText: true,
    footerLinkClass: "",
    footerLinkHref: "#!"
};

export default Features;