import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubDetail from './GithubDetail';

configure({ adapter: new Adapter() });

describe('GithubDetail', () => {
  let props;

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
    });

    it('should render', () => {
      expect(mount(<GithubDetail {...props} />)).toMatchSnapshot();
    });    
  });
});
