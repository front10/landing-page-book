import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Video from './Video';

configure({ adapter: new Adapter() });

describe('Video', () => {
  let props;
  let mounted;
  const video = () => {
    if (!mounted) {
      mounted = mount(<Video {...props} />);
    }
    return mounted;
  };
  describe('Video', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Video {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = video().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
