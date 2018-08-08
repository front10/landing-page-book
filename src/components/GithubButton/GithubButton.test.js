import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubButton from './GithubButton';

configure({ adapter: new Adapter() });

describe('GithubButton', () => {
  let props;
  let mounted;

  const githubButton = () => {
    if (!mounted) {
      mounted = mount(<GithubButton {...props} />);
    }
    return mounted;
  };

  describe('GithubButton', () => {
    beforeEach(() => {
      props = {
        showCounter: true,
        showBtnText: true,
        showGithubIcon: false,
        username: 'chubin',
        repository: 'cheat.sh',
        btntype: 'fork',
        btnText: 'Fork'
      };
    });

    it('should render', () => {
      expect(mount(<GithubButton {...props} />)).toMatchSnapshot();
    });

    it('always renders a span', () => {
      const span = githubButton().find('span');

      expect(span.length).toBeGreaterThan(0);
    });
  });
});
