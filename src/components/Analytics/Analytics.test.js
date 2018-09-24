import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Analytics from './Analytics';
import ReactGA from 'react-ga';

configure({ adapter: new Adapter() });

describe('Analytics', () => {
  let props;
  let mounted;
  const analytics = () => {
    if (!mounted) {
      mounted = mount(<Analytics {...props} />);
    }
    return mounted;
  };
  describe('Analytics', () => {
    beforeEach(() => {
      props = {
        testMode: true,
        idTracking: "U-000000-1"
      };
    });

    it('should render', () => {
      expect(mount(<Analytics {...props} />)).toMatchSnapshot();
    });
  });
});
