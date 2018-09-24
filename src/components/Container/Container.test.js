import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from './Container';

configure({ adapter: new Adapter() });

describe('Container', () => {
  let props;
  let mounted;
  const container = () => {
    if (!mounted) {
      mounted = mount(<Container {...props} />);
    }
    return mounted;
  };
  describe('Container', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Container {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = container().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
