import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavbarCollapse from './NavbarCollapse';

configure({ adapter: new Adapter() });

describe('NavbarCollapse', () => {
  let props;
  let mounted;
  const navbarCollapse = () => {
    if (!mounted) {
      mounted = mount(<NavbarCollapse {...props} />);
    }
    return mounted;
  };
  describe('NavbarCollapse', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<NavbarCollapse {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = navbarCollapse().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
