import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class ContactInfo extends Component {
  render() {
    const {
      showBorder,
      lng,
      lat,
      locationApiKey,
      address,
      email,
      phone,
      mobile,
      fax,
      website,
      contentAlign,
      showIcons,
      className,
      mapHeight
    } = this.props;
    return (
      <Card showBorder={showBorder} contentAlign={contentAlign} className={className}>
        {lng &&
          lat &&
          locationApiKey && (
            <div className="ContactInfo__Location mb-3">
              <Location
                lng={lng}
                lat={lat}
                zoom={12}
                markers={[
                  {
                    color: 'danger',
                    lat,
                    lng
                  }
                ]}
                apiKey={locationApiKey}
                height={mapHeight}
                {...extractProps('location', this.props)}
              />
            </div>
          )}
        {address && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-map-marker" {...extractProps('icon', this.props)} />}
            <Label content={address} {...extractProps('info', this.props)} />
          </div>
        )}
        {email && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-envelope" {...extractProps('icon', this.props)} />}
            <Label content={email} {...extractProps('info', this.props)} />
          </div>
        )}
        {phone && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-phone" {...extractProps('icon', this.props)} />}
            <Label content={phone} {...extractProps('info', this.props)} />
          </div>
        )}
        {mobile && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-mobile" {...extractProps('icon', this.props)} />}
            <Label content={mobile} {...extractProps('info', this.props)} />
          </div>
        )}
        {fax && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-fax" {...extractProps('icon', this.props)} />}
            <Label content={fax} {...extractProps('info', this.props)} />
          </div>
        )}
        {website && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-globe" {...extractProps('icon', this.props)} />}
            <Label content={website} {...extractProps('info', this.props)} />
          </div>
        )}
      </Card>
    );
  }
}

ContactInfo.propTypes = {
  /**
   * Class to apply to icon
   */
  className: PropTypes.string,
  /**
   * Show or hide card border
   */
  showBorder: PropTypes.bool,
  /**
   * Show or hide icons in the information
   */
  showIcons: PropTypes.bool,
  /**
   * Marker longitude
   */
  lng: PropTypes.number,
  /**
   * Marker latitude
   */
  lat: PropTypes.number,
  /**
   * Key of the map
   */
  locationApiKey: PropTypes.string,
  /**
   *  Address info
   */
  address: PropTypes.string,
  /**
   * Email contact info
   */
  email: PropTypes.string,
  /**
   * Phone contact info
   */
  phone: PropTypes.string,
  /**
   * Mobile contact info
   */
  mobile: PropTypes.string,
  /**
   * Fax contact info
   */
  fax: PropTypes.string,
  /**
   * Web contact info
   */
  website: PropTypes.string,
  /**
   * Height of the map
   */
  mapHeight: PropTypes.string,
  /**
   * Margin bottom of text
   */
  infoMarginBottom: PropTypes.string
};
ContactInfo.defaultProps = {
  className: '',
  showBorder: true,
  showIcons: true,
  lng: 0,
  lat: 0,
  locationApiKey: '',
  address: '',
  email: '',
  phone: '',
  mobile: '',
  fax: '',
  website: '',
  mapHeight: '50vh',
  infoMarginBottom: '0'
};

export default withStyles(ContactInfo);
