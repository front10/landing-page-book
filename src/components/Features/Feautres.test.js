import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Features from './Features';

configure({ adapter: new Adapter() });

describe('Features', () => {
  let props;
  let mounted;
  const features = () => {
    if (!mounted) {
      mounted = mount(<Features {...props} />);
    }
    return mounted;
  };
  describe('Features', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Features {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = features().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
