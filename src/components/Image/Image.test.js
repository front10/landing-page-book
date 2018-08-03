import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from './Image';

configure({ adapter: new Adapter() });

describe('Image', () => {
  let props;
  let mounted;
  const image = () => {
    if (!mounted) {
      mounted = mount(<Image {...props} />);
    }
    return mounted;
  };
  describe('Image', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Image {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = image().find('img');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
