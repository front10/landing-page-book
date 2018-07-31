import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubButton from './GithubButton';

configure({ adapter: new Adapter() });

describe('GithubButton', () => {
  let props;

  describe('GithubButton', () => {
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
      expect(mount(<GithubButton {...props} />)).toMatchSnapshot();
    });    
  });
});
