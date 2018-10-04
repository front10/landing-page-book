import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hero from './Hero';

configure({ adapter: new Adapter() });

describe('Hero', () => {
  let props;
  let mounted;
  const hero = () => {
    if (!mounted) {
      mounted = shallow(<Hero {...props} />);
    }
    return mounted;
  };
  describe('Hero', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Hero {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = hero().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
