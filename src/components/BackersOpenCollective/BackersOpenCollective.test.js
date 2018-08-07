import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BackersOpenCollective from './BackersOpenCollective';

configure({ adapter: new Adapter() });

describe('Backers', () => {
  let props;
  let mounted;
  const backersOpenCollective = () => {
    if (!mounted) {
      mounted = mount(<BackersOpenCollective {...props} />);
    }
    return mounted;
  };
  describe('BackersOpenCollective', () => {
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
      expect(mount(<BackersOpenCollective {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = backersOpenCollective().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
