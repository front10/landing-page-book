import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubDetail from './GithubDetail';

configure({ adapter: new Adapter() });

describe('GithubDetail', () => {
  let props;
  let mounted;
  const githubDetail = () => {
    if (!mounted) {
      mounted = shallow(<GithubDetail {...props} />);
    }
    return mounted;
  };
  describe('GithubDetail', () => {
    beforeEach(() => {
      props = {
        showCounter: true,
        showBtnText: true,
        showGithubIcon: false,
        username: 'chubin',
        repository: 'cheat.sh',
        btntype: 'fork',
        btnText: 'Fork',
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<GithubDetail {...props} />)).toMatchSnapshot();
    });
    it('always renders a div', () => {
      const divs = githubDetail().find('div');
      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
