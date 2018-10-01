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
        btnType: "fork",
        btnText: "Forks",
        username: "front10",
        repository: "landing-page-book"
      };
    });

    it('should render', () => {
      expect(mount(<GithubButton {...props} />)).toMatchSnapshot();
    });

    it('always renders a span', () => {
      const span = githubButton().find('span');

      expect(span.length).toBeGreaterThan(0);
    });

    it('onchange', async () => {
      const prevProps = {
        btnType: "star",
        btnText: "Stars",
        username: "front10",
        repository: "landing-page-book"
      };
      await githubButton().instance().onChange(prevProps);
      expect(githubButton().state()).toEqual({"counter": null, "showBtnText": true, "showCounter": true, "showGithubIcon": false});
    });
  });
});
