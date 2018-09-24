import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavbarBrand from './NavbarBrand';

configure({ adapter: new Adapter() });

describe('NavbarBrand', () => {
  let props;
  let mounted;
  const navbarBrand = () => {
    if (!mounted) {
      mounted = mount(<NavbarBrand {...props} />);
    }
    return mounted;
  };
  describe('NavbarBrand', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<NavbarBrand {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = navbarBrand().find('a');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
