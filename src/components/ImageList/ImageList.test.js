import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageList from './ImageList';

configure({ adapter: new Adapter() });

describe('ImageList', () => {
  let props;
  let mounted;
  const imageList = () => {
    if (!mounted) {
      mounted = mount(<ImageList {...props} />);
    }
    return mounted;
  };
  describe('ImageList', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<ImageList {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = imageList().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
