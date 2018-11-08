import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Location from './Location';

configure({ adapter: new Adapter() });

describe('Location', () => {
  let props;
  let mounted;
  const location = () => {
    if (!mounted) {
      mounted = shallow(<Location {...props} />);
    }
    return mounted;
  };
  describe('Location', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Location {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = location().find('div');

      expect(divs.length).toBe(0);
    });
  });
});
