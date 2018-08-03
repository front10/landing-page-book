import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Location from './Location';

configure({ adapter: new Adapter() });

describe('Location', () => {
  let props;
  let mounted;
  const location = () => {
    if (!mounted) {
      mounted = mount(<Location {...props} />);
    }
    return mounted;
  };
  describe('Location', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Location {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = location().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
