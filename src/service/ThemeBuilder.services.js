import fetch from 'node-fetch';
import config from '../../storybook-utils/node-server/config.json';

export default class ThemeBuilderService {
  static variables({ theme }) {
    return fetch(`http://localhost:${config.port}/api/${theme}/variables`, {
      method: 'GET'
    }).then(response => response.json());
  }

  static compile({ theme, variables }) {
    return fetch(`http://localhost:${config.port}/api/compile`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ variables, theme })
    }).then(response => response.json());
  }
}
