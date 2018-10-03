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
      props = {};
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

    it('Shuld GET all bakers', async () => {
      await backersOpenCollective()
        .instance()
        .getMembers();

      await expect(backersOpenCollective().state('backers')).toContain([
        {
          MemberId: 8447,
          createdAt: '1970-01-01 00:00',
          type: 'USER',
          role: 'ADMIN',
          isActive: true,
          totalAmountDonated: 0,
          lastTransactionAt: '2018-09-28 16:52',
          lastTransactionAmount: 0,
          profile: 'https://opencollective.com/chrome-544',
          name: 'Chrome',
          company: '@chrome',
          description: null,
          image: null,
          email: null,
          twitter: null,
          github: null,
          website: null
        }
      ]);
    });
  });
});
