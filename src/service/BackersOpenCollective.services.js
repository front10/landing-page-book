import fetch from 'node-fetch';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

class BackersOpenCollective {
  static getMembers({ collective, filter }) {
    return fetch(`${proxyUrl}https://opencollective.com/${collective}/members/${filter}.json`).then(
      blob => blob.json()
    );
  }
}

export default BackersOpenCollective;
