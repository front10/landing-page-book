import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Donation from './Donation';

configure({ adapter: new Adapter() });

describe('Donation', () => {
  let props;
  let mounted;
  const donation = () => {
    if (!mounted) {
      mounted = mount(<Donation {...props} />);
    }
    return mounted;
  };
  describe('Donation', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Donation {...props} />)).toMatchSnapshot();
    });
    it('always renders a div', () => {
      const divs = donation().find('a');
      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
