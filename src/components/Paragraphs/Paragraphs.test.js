import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraphs from './Paragraphs';

configure({ adapter: new Adapter() });

describe('Paragraphs', () => {
  let props;
  let mounted;
  const paragraphs = () => {
    if (!mounted) {
      mounted = mount(<Paragraphs {...props} />);
    }
    return mounted;
  };
  describe('Paragraphs', () => {
    beforeEach(() => {
      props = { text: "Testing paragraphs" };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Paragraphs {...props} />)).toMatchSnapshot();
    });

    it('always renders a paragraphs', () => {
      const div = paragraphs().find('p');
      expect(div.length).toBeGreaterThan(0);
    });
  });
});
