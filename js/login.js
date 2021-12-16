import {
	testLengthofTextBoxValue,
	testEmailAddress,
} from './libs/validation.js';


// import { BASE_URL } from './configs/configs.js';
const BASE_URL = `https://sem-project-api.herokuapp.com/api/admin`;

import alert from './components/alert.js';

let form = document.querySelector('.form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');


form.onsubmit = async function (event) {
	event.preventDefault();
    

	if (
		testLengthofTextBoxValue(password.value, 1) &&
		testEmailAddress(email.value)
	) {
		try {
			const response = await axios.post(`${BASE_URL}`, {
				identifier: email.value,
				password: password.value,
			});

			localStorage.setItem('jwt', response.data.jwt);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			window.location.href = './dashboard.html';
		} catch (error) {
			alert('alert-danger', error);
		}
	} else {
		alert('alert-danger', 'Please enter proper values for the inputs');
	}
};