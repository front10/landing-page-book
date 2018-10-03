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
<<<<<<< HEAD
          },
          {
            name: 'Resources',
            sections: [
              {
                name: 'Resource',
                url: 'https://front10.com'
              },
              {
                name: 'Resource name',
                url: 'https://front10.com'
              },
              {
                name: 'Another resource',
                url: 'https://front10.com'
              },
              {
                name: 'Final resource',
                url: 'https://front10.com'
              }
            ]
          },
          {
            name: 'About',
            sections: [
              {
                name: 'Team',
                url: 'https://front10.com'
              },
              {
                name: 'Locations',
                url: 'https://front10.com'
              },
              {
                name: 'Privacy',
                url: 'https://front10.com'
              },
              {
                name: 'Terms',
                url: 'https://front10.com'
              }
            ]
          }
        ]
=======
          }]
>>>>>>> c8598f6ff33bbb153a69ae03fdc592f10e57fb05
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

    it('should render sections', async () => {
      const ul = footer().find('ul');

      expect(ul.length).toBeGreaterThan(0);
    });
  });
});
