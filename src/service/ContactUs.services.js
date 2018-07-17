import React from "react";
import fetch from 'node-fetch';

class ContactUsService {
	static send(url, name, email, phone, message) {
		return fetch(url, {
			mode: 'no-cors',
			method: 'POST',
			body: JSON.stringify({
				name: name,
				email: email,
				phone: phone,
				message: message
			})
		}).then((response) => {
			return response;
		});
	}

}

export default ContactUsService;
