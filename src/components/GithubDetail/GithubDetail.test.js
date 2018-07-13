import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GithubDetail from './GithubDetail';
import GithubService from '../../service/GithubDetail.services';

configure({ adapter: new Adapter() });

describe("GithubDetail", () => {
	let props;
	let mounted;
	const githubDetail = () => {
		if (!mounted) {
			mounted = mount(<GithubDetail {...props} />);
		}
		return mounted;
	};
	describe('GithubDetail', () => {

		beforeEach(() => {
			props = {
				showCounter: true,
				showBtnText: true,
				showGithubIcon: false,
				username: "chubin",
				repository: "cheat.sh",
				btntype: "fork",
				btnText: "Fork"
			};
			mounted = undefined;
		});

		it('should render', () => {
			expect(mount(<GithubDetail {...props} />)).toMatchSnapshot();
		});
		it("always renders a div", () => {
			const divs = githubDetail().find("div");
			expect(divs.length).toBeGreaterThan(0);
		});
		it("followers", async () => {
			let res = await GithubService.getUserFallowers("chubin");
			expect(res);
		});
		it("stats", async () => {
			let res = await GithubService.getRepositoriesStats("chubin","cheat.sh");
			expect(res);
		});
		it("download", async () => {
			let res = await GithubService.getRepositoriesDownloads("chubin","chubin");
			expect(res);
		});
	});
})