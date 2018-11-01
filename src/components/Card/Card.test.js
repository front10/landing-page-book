import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Card', () => {
  let props;
  let mounted;
  const card = () => {
    if (!mounted) {
      mounted = shallow(<Card {...props} />);
    }
    return mounted;
  };
  describe('Card', () => {
    beforeEach(() => {
      props = {
        showBorder: true,
        imageCircle: true,
        imageBorder: false,
        imageShadow: false,
        shadow: false,
        summaryJustified: false,
        image: '/assets/images/team/astronaut.svg',
        title: '',
        subTitle: 'asdsdad sadsd',
        summary: 'sdadasd',
        children: null,
        contentAlign: 'center'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Card {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = card().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('should render Description', () => {
      const p = card().find('p');

      expect(p.length).toBeGreaterThan(0);
    });
  });
});
