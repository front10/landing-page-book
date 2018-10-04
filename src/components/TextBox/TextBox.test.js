import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextBox from './TextBox';

configure({ adapter: new Adapter() });

describe('TextBox', () => {
  let props;
  let mounted;
  const textBox = () => {
    if (!mounted) {
      mounted = mount(<TextBox {...props} />);
    }
    return mounted;
  };
  describe('TextBox', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<TextBox {...props} />)).toMatchSnapshot();
    });
  });
});
