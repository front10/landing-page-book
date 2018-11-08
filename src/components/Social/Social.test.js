import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Social from './Social';

configure({ adapter: new Adapter() });

describe('Social', () => {
  let props;
  let mounted;

  const social = () => {
    if (!mounted) {
      mounted = shallow(<Social {...props} />);
    }
    return mounted;
  };
  describe('Social', () => {
    beforeEach(() => {
      props = {
        gray: false,
        rounded: true,
        type: 'email',
        url: 'https://front10.com',
        directLink: true
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Social {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = social().find('a');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('always renders a div', () => {
      props = {
        gray: false,
        rounded: true,
        type: 'email',
        url: 'https://front10.com',
        directLink: false
      };
      const wrapper = shallow(<social props />);
      const divs = wrapper.find('div');

      expect(divs.length).toBe(0);
    });
  });
});
