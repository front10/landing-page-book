import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sponsors from './Sponsors';

configure({ adapter: new Adapter() });

describe('Sponsors', () => {
  let props;
  let mounted;
  const sponsors = () => {
    if (!mounted) {
      mounted = mount(<Sponsors {...props} />);
    }
    return mounted;
  };
  describe('Sponsors', () => {
    beforeEach(() => {
      props = {
        gray: false,
        sponsors: []
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Sponsors {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = sponsors().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
