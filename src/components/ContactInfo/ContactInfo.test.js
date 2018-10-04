import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactInfo from './ContactInfo';

configure({ adapter: new Adapter() });

describe('ContactInfo', () => {
  let props;
  let mounted;
  const contactInfo = () => {
    if (!mounted) {
      mounted = mount(<ContactInfo {...props} />);
    }
    return mounted;
  };
  describe('ContactInfo', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<ContactInfo {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = contactInfo().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
