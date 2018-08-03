import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';
import Header from '../Header/Header';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
  }

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
            {showIcons && <Icon icon="fa fa-map-marker mr-2" />}
            {address}
          </div>
        )}
        {email && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-envelope mr-2" />}
            {email}
          </div>
        )}
        {phone && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-phone mr-2" />}
            {phone}
          </div>
        )}
        {mobile && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-mobile mr-2" />}
            {mobile}
          </div>
        )}
        {fax && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-fax mr-2" />}
            {fax}
          </div>
        )}
        {website && (
          <div className="ContactInfo__Information">
            {showIcons && <Icon icon="fa fa-globe mr-2" />}
            {website}
          </div>
        )}
      </Card>
    );
  }
}

ContactInfo.propTypes = {
  showBorder: PropTypes.bool,
  showIcons: PropTypes.bool,
  lng: PropTypes.number,
  lat: PropTypes.number,
  locationApiKey: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  mobile: PropTypes.string,
  fax: PropTypes.string,
  website: PropTypes.string,
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
