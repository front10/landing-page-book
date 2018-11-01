import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  let props;
  let mounted;
  const navbar = () => {
    if (!mounted) {
      mounted = shallow(<Navbar {...props} />);
    }
    return mounted;
  };
  describe('Navbar', () => {
    beforeEach(() => {
      props = {
        transparent: false,
        fixed: false,
        brandName: 'front10',
        brandLink: 'https://www.front10.com',
        brandLogo: '/assets/images/logo/front10.png',
        className: '',
        expand: '',
        leftItems: [],
        rightItems: [],
        children: null,
        onItemClick: () => {}
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Navbar {...props} />)).toMatchSnapshot();
    });

    it('Should render', () => {
      const divs = navbar().find('nav');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('Collapse', () => {
      navbar()
        .instance()
        .toggleCollapse();

      expect(navbar().state('collapse')).toBeTruthy();
    });
  });
});
