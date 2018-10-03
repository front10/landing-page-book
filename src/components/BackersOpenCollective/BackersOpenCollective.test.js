import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BackersOpenCollective from './BackersOpenCollective';

configure({ adapter: new Adapter() });

describe('Backers', () => {
  let props;
  let mounted;
  const backersOpenCollective = () => {
    if (!mounted) {
      mounted = mount(<BackersOpenCollective {...props} />);
    }
    return mounted;
  };
  describe('BackersOpenCollective', () => {
    beforeEach(() => {
      props = {
        collective: "webpack"
      };
      mounted = undefined;
    });

    beforeEach(() => {
      props = {
        collective: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<BackersOpenCollective {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = backersOpenCollective().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('sort function', ()=>{
      const backers = [{contributionAmount: 1, name:'Nick', image: 'image.jpg'}, {contributionAmount: 23, name:'John', image: 'image.jpg'}];
      backersOpenCollective().instance().sort(backers, 'asc');
      expect(backersOpenCollective().state('backersOrdered')[0].name).toEqual('Nick');
    });
  });
});
