import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  let props;
  let mounted;
  const header = () => {
    if (!mounted) {
      mounted = mount(<Header {...props} />);
    }
    return mounted;
  };
  describe('Header', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    beforeEach(() => {
      props = {
        vendor: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Header {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = header().find('h1');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
