import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wizard from './Wizard';

configure({adapter: new Adapter()});

describe('Wizard', () => {
  let props;
  let mounted;
  const wizard = () => {
    if (!mounted) {
      mounted = mount(<Wizard {...props} />);
    }
    return mounted;
  };
  describe('Wizard', () => {
    beforeEach(() => {
      props = {
        steps: [{
          name: "Step 1",
          component: <div>Hello</div>
        }]
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<Wizard {...props} />)).toMatchSnapshot();
    });
    it('always renders a div', () => {
      const divs = wizard().find('button');
      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
