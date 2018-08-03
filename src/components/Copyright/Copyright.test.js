import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Copyright from './Copyright';

configure({ adapter: new Adapter() });

describe('Copyright', () => {
  let props;
  let mounted;
  const copyright = () => {
    if (!mounted) {
      mounted = mount(<Copyright {...props} />);
    }
    return mounted;
  };
  describe('Copyright', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Copyright {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = copyright().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
