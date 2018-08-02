import fetch from 'node-fetch';

class ContactUsService {
  static send(url, name, email, phone, message) {
    return fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    }).then(response => response);
  }
}

export default ContactUsService;
