import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  let props;
  let mounted;
  const footer = () => {
    if (!mounted) {
      mounted = mount(<Footer {...props} />);
    }
    return mounted;
  };
  describe('footer', () => {
    beforeEach(() => {
      props = {
        sections: [
          {
            name: 'Features',
            sections: [
              {
                name: 'Cool stuff',
                url: 'https://front10.com'
              },
              {
                name: 'Random feature',
                url: 'https://front10.com'
              },
              {
                name: 'Team feature',
                url: 'https://front10.com'
              },
              {
                name: 'Stuff for developers',
                url: 'https://front10.com'
              },
              {
                name: 'Another one',
                url: 'https://front10.com'
              },
              {
                name: 'Last time',
                url: 'https://front10.com'
              }
            ]
          }]
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<footer {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = footer().find('footer');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
