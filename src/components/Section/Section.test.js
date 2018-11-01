import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Section from './Section';

configure({ adapter: new Adapter() });

describe('Section', () => {
  let props;
  let mounted;
  const section = () => {
    if (!mounted) {
      mounted = shallow(<Section {...props} />);
    }
    return mounted;
  };
  describe('Section', () => {
    beforeEach(() => {
      props = {
        gray: false,
        title: 'Front10',
        subTitle: 'Awesome team',
        className: '',
        contentClassName: '',
        children: null
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Section {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = section().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
