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
      props = {
        isFixed: true,
        isCentered: true,
        particles: true,
        opacity: 0,
        parallaxOffset: 0,
        image: '',
        overlayColor: '#fff',
        header: 'AAAAAAAAAAAAAAA',
        subHeader: 'BBBBBBBBBB',
        subHeaderPosition: 'bottom',
        minHeight: '100vh',
        backgroundColor: 'transparent',
        buttons: [],
        particlesParams: {},
        children: null
      };
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
