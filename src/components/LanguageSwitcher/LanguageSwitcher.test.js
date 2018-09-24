import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LanguageSwitcher from './LanguageSwitcher';

configure({ adapter: new Adapter() });

describe('LanguageSwitcher', () => {
  let props;
  let mounted;
  const languageSwitcher = () => {
    if (!mounted) {
      mounted = shallow(<LanguageSwitcher {...props} />);
    }
    return mounted;
  };
  describe('LanguageSwitcher', () => {
    beforeEach(() => {
      props = {};
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<LanguageSwitcher {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = languageSwitcher().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
