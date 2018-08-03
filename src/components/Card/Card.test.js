import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Card', () => {
  let props;
  let mounted;
  const card = () => {
    if (!mounted) {
      mounted = mount(<Card {...props} />);
    }
    return mounted;
  };
  describe('Card', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Card {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = card().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
