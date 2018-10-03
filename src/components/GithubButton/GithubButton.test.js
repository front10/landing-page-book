import React from 'react';
import { configure, mount, shallow } from 'enzyme';
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
        username: 'front10',
        repository: 'landing-page-book',
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

    it('Get repository stats', async () => {
      const g = await mount(<GithubButton {...props} />);
      await g.instance().getRepositoryStats({
        username: 'front10',
        repository: 'landing-page-book',
        btntype: 'fork'
      });

      expect(g.state).toBeDefined();
    });
  });
});
