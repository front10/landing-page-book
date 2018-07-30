import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Social from './Social';

configure({ adapter: new Adapter() });

describe('Social', () => {
  let props;
  describe('Social', () => {
    beforeEach(() => {
      props = {};
    });

    it('should render', () => {
      expect(shallow(<Social {...props} />)).toMatchSnapshot();
    });
  });
});
