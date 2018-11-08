import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Donation from './Donation';

configure({ adapter: new Adapter() });

describe('Donation', () => {
  let props;
  let mounted;
  const donation = () => {
    if (!mounted) {
      mounted = shallow(<Donation {...props} />);
    }
    return mounted;
  };
  describe('Donation', () => {
    beforeEach(() => {
      props = {
        url: 'https://front10.com'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Donation {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = donation().find('img');

      expect(divs.length).toBe(0);
    });
  });
});
