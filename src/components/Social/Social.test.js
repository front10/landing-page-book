import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Social from './Social';

configure({ adapter: new Adapter() });

describe('Social', () => {
  let props;
  let mounted;
  const social = () => {
    if (!mounted) {
      mounted = shallow(<Social {...props} />);
    }
    return mounted;
  };
  describe('Social', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Social {...props} />)).toMatchSnapshot();
    });
  });
});
