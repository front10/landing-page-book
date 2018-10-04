import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactUs from './ContactUs';

configure({ adapter: new Adapter() });

describe('ContactUs', () => {
  let props;
  let mounted;
  const contactUs = () => {
    if (!mounted) {
      mounted = mount(<ContactUs {...props} />);
    }
    return mounted;
  };
  describe('ContactUs', () => {
    beforeEach(() => {
      props = {
        name: 'name',
        mail: 'mail@gmail.com',
        phone: '5476',
        message: 'This is a new message'
      };
      mounted = undefined;
    });

    beforeEach(() => {
      props = {
        name: 'name',
        mail: 'mail@gmail.com',
        phone: '5476',
        message: 'This is a new message'
      };
      mounted = undefined;
    });

    it('should render', () => {
      expect(mount(<ContactUs {...props} />)).toMatchSnapshot();
    });

    it('always renders a div', () => {
      const divs = contactUs().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('on change message', () => {
      const $event = { value: 'abc' };
      contactUs()
        .instance()
        .onChangeMessage($event);

      expect(contactUs().state('message')).toEqual('abc');
    });

    it('on change phone', () => {
      const $event = { value: '5476' };
      contactUs()
        .instance()
        .onChangePhone($event);

      expect(contactUs().state('phone')).toEqual('5476');
    });

    it('on change email', () => {
      const $event = { value: 'abc@gmail.com' };
      contactUs()
        .instance()
        .onChangeMail($event);

      expect(contactUs().state('mail')).toEqual('abc@gmail.com');
    });

    it('on change message', () => {
      const $event = { value: 'my name' };
      contactUs()
        .instance()
        .onChangeName($event);

      expect(contactUs().state('name')).toEqual('my name');
    });
  });
});
