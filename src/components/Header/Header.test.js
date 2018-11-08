import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  let props;
  let mounted;
  const header = () => {
    if (!mounted) {
      mounted = shallow(<Header {...props} />);
    }
    return mounted;
  };
  describe('Header', () => {
    beforeEach(() => {
      props = {
        borderTop: false,
        borderBottom: false,
        textAlign: 'left',
        icon: 'fa fa-home',
        className: '',
        color: '',
        type: 'h1',
        children: null
      };
      mounted = undefined;
    });

    beforeEach(() => {
      props = {
        vendor: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Header {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = header().find('h1');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
