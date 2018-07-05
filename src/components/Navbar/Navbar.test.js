import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar'

configure({adapter: new Adapter()});

describe("Navbar", () => {

	let props;
	let mounted;
	const navbar = () => {
		if (!mounted) {
			mounted = mount(<Navbar {...props} />);
		}
		return mounted;
	};

	beforeEach(() => {
		props = {};
		mounted = undefined;
	});

	it("always renders a div", () => {
		const divs = navbar().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});
});