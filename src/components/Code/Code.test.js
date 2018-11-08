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
        languageCode: 'javascript',
        collapsible: true,
        collapsed: false,
        theme: 'monokai',
        codeLink: '',
        readOnly: false,
        lineNumbers: true,
        showheader: true,
        showDeleteButton: true,
        showCopyButton: true,
        children: null,
        code: '<h1>Title</h1>',
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

    it('Should Collapse', () => {
      code()
        .instance()
        .toggleCollapse();

      expect(code().state('collapsed')).toBeTruthy();
      expect(code().state('hideMessages')).toMatch(/Show code/);
    });
  });
});
