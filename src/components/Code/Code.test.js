import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Code from './Code';

configure({ adapter: new Adapter() });

describe('Code', () => {
  let props;
  let mounted;
  const code = () => {
    if (!mounted) {
      mounted = shallow(<Code {...props} />);
    }
    return mounted;
  };
  describe('Code', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Code {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = code().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
