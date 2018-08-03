import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Section from './Section';

configure({ adapter: new Adapter() });

describe('Section', () => {
  let props;
  let mounted;
  const section = () => {
    if (!mounted) {
      mounted = mount(<Section {...props} />);
    }
    return mounted;
  };
  describe('Section', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Section {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = section().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
