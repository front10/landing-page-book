import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BuiltWith from './BuiltWith';

configure({ adapter: new Adapter() });

describe('BuiltWith', () => {
  let props;
  let mounted;
  const builtWith = () => {
    if (!mounted) {
      mounted = mount(<BuiltWith {...props} />);
    }
    return mounted;
  };
  describe('BuiltWith', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<BuiltWith {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = builtWith().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
