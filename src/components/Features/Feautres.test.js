import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Code from './Code';

configure({ adapter: new Adapter() });

describe("Code", () => {
	let props;
	let mounted;
	const code = () => {
		if (!mounted) {
			mounted = mount(<Code {...props} />);
		}
		return mounted;
	};
	describe('Code', () => {

		beforeEach(() => {
			props = {};
			mounted = undefined;
		});

		it('should render', () => {
			expect(mount(<Code {...props} />)).toMatchSnapshot();
		});
		it("always renders a div", () => {
			const divs = code().find("div");
			expect(divs.length).toBeGreaterThan(0);
        });
        it("download", async () => {
			let res = await GithubService.getRepositoriesDownloads("chubin","chubin");
			expect(res);
		});
	});
})