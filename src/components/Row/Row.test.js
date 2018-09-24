import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Row from './Row';

configure({ adapter: new Adapter() });

describe('Row', () => {
  let props;
  let mounted;
  const row = () => {
    if (!mounted) {
      mounted = mount(<Row {...props} />);
    }
    return mounted;
  };
  describe('Row', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Row {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = row().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
