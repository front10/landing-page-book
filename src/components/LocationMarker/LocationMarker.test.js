import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationMarker from './LocationMarker';

configure({ adapter: new Adapter() });

describe('LocationMarker', () => {
  let props;
  let mounted;
  const locationMarker = () => {
    if (!mounted) {
      mounted = mount(<LocationMarker {...props} />);
    }
    return mounted;
  };
  describe('LocationMarker', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<LocationMarker {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = locationMarker().find('i');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
