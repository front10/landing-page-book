import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactInfo from './ContactInfo';

configure({ adapter: new Adapter() });

describe('ContactInfo', () => {
  let props;
  let mounted;
  const contactInfo = () => {
    if (!mounted) {
      mounted = shallow(<ContactInfo {...props} />);
    }
    return mounted;
  };
  describe('ContactInfo', () => {
    beforeEach(() => {
      props = {
        showBorder: true,
        showIcons: true,
        lng: 0,
        lat: 0,
        locationApiKey: '',
        address: 'Front10 address',
        email: 'hello@front10.com',
        phone: '55555555',
        mobile: '5555555',
        fax: '6554 6546 4664 655546',
        website: 'www.front10.com',
        contentAlign: 'left'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<ContactInfo {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = contactInfo().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
