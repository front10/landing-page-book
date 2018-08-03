import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  let props;
  let mounted;
  const navbar = () => {
    if (!mounted) {
      mounted = mount(<Navbar {...props} />);
    }
    return mounted;
  };
  describe('Navbar', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Navbar {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = navbar().find('nav');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
