import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from './Icon';

configure({ adapter: new Adapter() });

describe('Icon', () => {
  let props;
  let mounted;
  const icon = () => {
    if (!mounted) {
      mounted = mount(<Icon {...props} />);
    }
    return mounted;
  };
  describe('Icon', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Icon {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = icon().find('i');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
