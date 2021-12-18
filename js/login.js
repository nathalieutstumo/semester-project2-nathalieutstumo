import { BASE_URL } from './configs/configs.js';
import { testLengthofTextBox, testEmailAddress } from './libs/validation.js';
import alert from './components/alert.js';

let form = document.querySelector('.form');
let email = document.querySelector('#exampleFormControlInput1');
let password = document.querySelector('#inputPassword');

form.onsubmit = async function (event) {
  event.preventDefault();

  if (testLengthofTextBox(password.value, 1) && testEmailAddress(email.value)) {
    try {
      const response = await axios.post(`${BASE_URL}/auth/local`, {
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
    alert(
      'alert-danger',
      'The username or password you have entered is not correct',
    );
  }
};