import fetch from 'node-fetch';

export default class ThemeBuilderService {
  static variables({ theme }) {
    return fetch(`themes/${theme}/style/index.css`, {
      method: 'GET'
    }).then(response => response.text());
  }
}
