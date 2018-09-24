import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('Button', () => {
  let props;
  let mounted;
  const button = () => {
    if (!mounted) {
      mounted = mount(<Button {...props} />);
    }
    return mounted;
  };
  describe('Button', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Button {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = button().find('button');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
