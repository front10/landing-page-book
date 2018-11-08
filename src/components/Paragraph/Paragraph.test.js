import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraph from './Paragraph';

configure({ adapter: new Adapter() });

describe('Paragraph', () => {
  let props;
  let mounted;
  const Paragraph = () => {
    if (!mounted) {
      mounted = mount(<Paragraph {...props} />);
    }
    return mounted;
  };
  describe('Paragraph', () => {
    beforeEach(() => {
      props = { text: "Testing Paragraph" };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Paragraph {...props} />)).toMatchSnapshot();
    });

    it('always renders a Paragraph', () => {
      const div = Paragraph().find('p');
      expect(div.length).toBeGreaterThan(0);
    });
  });
});
