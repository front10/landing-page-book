import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';

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
      showIcons
    } = this.props;
    return (
      <Card showBorder={showBorder} contentAlign={contentAlign}>
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
                    color: '#d20000',
                    lat,
                    lng
                  }
                ]}
                apiKey={locationApiKey}
              />
            </div>
          )}
        {address && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-map-marker" />}
            {address}
          </div>
        )}
        {email && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-envelope" />}
            {email}
          </div>
        )}
        {phone && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-phone" />}
            {phone}
          </div>
        )}
        {mobile && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-mobile" />}
            {mobile}
          </div>
        )}
        {fax && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-fax" />}
            {fax}
          </div>
        )}
        {website && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-globe" />}
            {website}
          </div>
        )}
      </Card>
    );
  }
}

ContactInfo.propTypes = {
  /**
   * Show or hide card border. Default `true`
   */
  showBorder: PropTypes.bool,
  /**
   * Show or hide icons in the information. Default `true`
   */
  showIcons: PropTypes.bool,
  /**
   * Marker longitude. Default `0`
   */
  lng: PropTypes.number,
  /**
   * Marker latitude. Default `0`
   */
  lat: PropTypes.number,
  /**
   * Key of the map. Default `""`
   */
  locationApiKey: PropTypes.string,
  /**
   *  Address info. Default `""`
   */
  address: PropTypes.string,
  /**
   * Email contact info. Default `""`
   */
  email: PropTypes.string,
  /**
   * Phone contact info. Default `""`
   */
  phone: PropTypes.string,
  /**
   * Mobile contact info. Default `""`
   */
  mobile: PropTypes.string,
  /**
   * Fax contact info. Default `""`
   */
  fax: PropTypes.string,
  /**
   * Web contact info. Default `""`
   */
  website: PropTypes.string,
  /**
   * Card content align. Default `"left"`, can be `left`, `center` and `right`
   */
  contentAlign: PropTypes.string
};
ContactInfo.defaultProps = {
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
  contentAlign: 'left'
};

export default ContactInfo;
