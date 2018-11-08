import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Browser from './Browser';

configure({ adapter: new Adapter() });

describe('Browser', () => {
  let props;
  let mounted;
  const browser = () => {
    if (!mounted) {
      mounted = shallow(<Browser {...props} />);
    }
    return mounted;
  };
  describe('Browser', () => {
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
      expect(shallow(<Browser {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = browser().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
