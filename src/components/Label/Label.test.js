import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from './Label';

configure({ adapter: new Adapter() });

describe('Label', () => {
  let props;
  let mounted;
  const label = () => {
    if (!mounted) {
      mounted = mount(<Label {...props} />);
    }
    return mounted;
  };
  describe('Label', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Label {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = label().find('label');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
