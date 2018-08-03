import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavbarNav from './NavbarNav';

configure({ adapter: new Adapter() });

describe('NavbarNav', () => {
  let props;
  let mounted;
  const navbarNav = () => {
    if (!mounted) {
      mounted = mount(<NavbarNav {...props} />);
    }
    return mounted;
  };
  describe('NavbarNav', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<NavbarNav {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = navbarNav().find('ul');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
