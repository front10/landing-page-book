import fetch from 'node-fetch';
import GITHUB_API_URL from './constant';

class GithubService {
  static getRepositoriesStats(username, repository) {
    return fetch(`${GITHUB_API_URL}repos/${username}/${repository}`).then(response =>
      response.json()
    );
  }

  static getUserFallowers(username) {
    return fetch(`${GITHUB_API_URL}users/${username}/followers`).then(response => response.json());
  }

  static getRepositoriesDownloads(username, repository) {
    return fetch(`${GITHUB_API_URL}repos/${username}/${repository}/downloads`).then(response =>
      response.json()
    );
  }
}

export default GithubService;
