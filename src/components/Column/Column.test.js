import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Column from './Column';

configure({ adapter: new Adapter() });

describe('Column', () => {
  let props;
  let mounted;
  const column = () => {
    if (!mounted) {
      mounted = mount(<Column {...props} />);
    }
    return mounted;
  };
  describe('Column', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Column {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = column().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
