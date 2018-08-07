import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Backers from './Backers';

configure({ adapter: new Adapter() });

describe('Backers', () => {
  let props;
  let mounted;
  const backers = () => {
    if (!mounted) {
      mounted = mount(<Backers {...props} />);
    }
    return mounted;
  };
  describe('Backers', () => {
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
      expect(mount(<Backers {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = backers().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
