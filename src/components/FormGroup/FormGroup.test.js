import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormGroup from './FormGroup';

configure({ adapter: new Adapter() });

describe('FormGroup', () => {
  let props;
  let mounted;
  const formGroup = () => {
    if (!mounted) {
      mounted = mount(<FormGroup {...props} />);
    }
    return mounted;
  };
  describe('FormGroup', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<FormGroup {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = formGroup().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
