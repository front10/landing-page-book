import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BrowserSupport from './BrowserSupport';

configure({ adapter: new Adapter() });

describe('BrowserSupport', () => {
  let props;
  let mounted;
  const browserSupport = () => {
    if (!mounted) {
      mounted = mount(<BrowserSupport {...props} />);
    }
    return mounted;
  };
  describe('BrowserSupport', () => {
    beforeEach(() => {
      props = {
        items: [
          {
            type: 'firefox',
            version: '> 56'
          }
        ]
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<BrowserSupport {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = browserSupport().find('table');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
