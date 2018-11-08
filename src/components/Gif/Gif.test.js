import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gif from './Gif';

configure({ adapter: new Adapter() });

describe('Gif', () => {
  let props;
  let mounted;
  const gif = () => {
    if (!mounted) {
      mounted = shallow(<Gif {...props} />);
    }
    return mounted;
  };
  describe('Gif', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Gif {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = gif().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
