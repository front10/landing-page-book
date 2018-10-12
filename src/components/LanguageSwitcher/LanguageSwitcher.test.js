import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LanguageSwitcher from './LanguageSwitcher';

configure({ adapter: new Adapter() });

describe('LanguageSwitcher', () => {
  let props;
  let mounted;
  let lang = '';
  const languageSwitcher = () => {
    if (!mounted) {
      mounted = shallow(<LanguageSwitcher {...props} />);
    }
    return mounted;
  };
  function changeLanguage(langu) {
    lang = langu;
  }
  describe('LanguageSwitcher', () => {
    beforeEach(() => {
      props = { onSelect: l => changeLanguage(l) };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<LanguageSwitcher {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = languageSwitcher().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('OnSelect', () => {
      languageSwitcher()
        .instance()
        .onSelect('US');

      expect(lang).toMatchObject({ language: 'US' });
    });
  });
});
