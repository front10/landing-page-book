import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Code from './Code';

configure({ adapter: new Adapter() });

describe('Code', () => {
  let props;
  let mounted;
  const code = () => {
    if (!mounted) {
      mounted = shallow(<Code {...props} />);
    }
    return mounted;
  };
  describe('Code', () => {
    beforeEach(() => {
      props = {
        code:
          'const component = {\n\tname: "react-code",\n\tauthor: "front10-devs",\n\trepo: "ht' +
          'tps://gitlab.com/front10-devs/landing-page-book"\n};',
        bgColorDark: false,
        languageCode: 'javascript',
        theme: 'idea',
        readOnly: false,
        lineNumbers: true,
        showheader: true,
        showfooter: true,
        updateCode: () => {}
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Code {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = code().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('copy to clipboard', () => {
      code()
        .instance()
        .copyToClipboard();

      expect(code().state('scopied')).toBeTruthy();
    });
  });
});
