import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gif from './Gif';

configure({ adapter: new Adapter() });

describe('Gif', () => {
  let props;
  let mounted;
  const gif = () => {
    if (!mounted) {
      mounted = mount(<Gif {...props} />);
    }
    return mounted;
  };
  describe('Gif', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Gif {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = gif().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
