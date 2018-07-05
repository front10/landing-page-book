import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button'

configure({adapter: new Adapter()});

describe("Button", () => {

	let props;
	let mounted;
	const button = () => {
		if (!mounted) {
			mounted = mount(<Button {...props} />);
		}
		return mounted;
	};

	beforeEach(() => {
		props = {};
		mounted = undefined;
	});

	it("always renders a div", () => {
		const divs = button().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});

	it("toogle", () => {
		button().instance().toggle();
		expect(button().state("tooltipOpen")).toEqual(true);
	});
});