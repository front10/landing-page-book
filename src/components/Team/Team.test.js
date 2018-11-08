import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Team from './Team';

configure({ adapter: new Adapter() });

describe('Team', () => {
  let props;
  let mounted;
  const team = () => {
    if (!mounted) {
      mounted = shallow(<Team {...props} />);
    }
    return mounted;
  };
  describe('Team', () => {
    beforeEach(() => {
      props = {
        showBorder: true,
        showImage: true,
        showName: true,
        showJob: true,
        showSummary: true,
        imageCircle: true,
        imageBorder: false,
        socialGray: false,
        shadow: false,
        imageShadow: false,
        topColor: 'transparent',
        contentAlign: 'center',
        members: [
          {
            image: '/images/team/ninja.svg',
            job: 'Ninja',
            name: 'Leonardo',
            profile: [
              {
                social: 'facebook',
                url: 'https://www.facebook.com/JavaScriptTeam/'
              },
              {
                social: 'twitter',
                url: 'https://twitter.com/front10hello?lang=es'
              }
            ],
            summary:
              'Leonardo, nickname Leo, is a fictional character and one of the four main characters in the Teenage Mutant Ninja Turtles comics and related media.'
          },
          {
            image: '/images/team/bohemian.svg',
            job: 'Painter',
            name: 'Van Gogh',
            profile: [
              {
                social: 'facebook',
                url: 'https://www.facebook.com/JavaScriptTeam/'
              },
              {
                social: 'email',
                url: 'https://front10.com'
              }
            ]
          }
        ]
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(shallow(<Team {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = team().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});
