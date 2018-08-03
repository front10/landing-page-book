import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from "./Link";

configure({ adapter: new Adapter() });

describe('Link', () => {
  let props;
  let mounted;
  const link = () => {
    if (!mounted) {
      mounted = mount(<Link {...props} />);
    }
    return mounted;
  };
  describe('Link', () => {
    beforeEach(() => {
      props = {
        href: "https://front10.com"
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Link {...props} />)).toMatchSnapshot();
    });
    it('always renders a a', () => {
      const divs = link().find('a');
      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
