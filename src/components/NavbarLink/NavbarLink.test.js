import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavbarLink from './NavbarLink';

configure({ adapter: new Adapter() });

describe('NavbarLink', () => {
  let props;
  let mounted;
  const navbarLink = () => {
    if (!mounted) {
      mounted = mount(<NavbarLink {...props} />);
    }
    return mounted;
  };
  describe('NavbarLink', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<NavbarLink {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = navbarLink().find('li');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
