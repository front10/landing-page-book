import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Team from './Team';

configure({ adapter: new Adapter() });

describe('Team', () => {
  let props;
  let mounted;
  const team = () => {
    if (!mounted) {
      mounted = mount(<Team {...props} />);
    }
    return mounted;
  };
  describe('Team', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Team {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = team().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
