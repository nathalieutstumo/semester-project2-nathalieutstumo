import { BASE_URL } from './configs/configs.js';
import { testLengthofTextBox, testEmailAddress } from './libs/validation.js';
import { headers } from './configs/configs.js';
import alert from './components/alert.js';

let form = document.querySelector('.form');
let email = document.querySelector('#exampleFormControlInput1');
let password = document.querySelector('#inputPassword');

form.onsubmit = async function (event) {
  event.preventDefault();

  if (testLengthofTextBox(password.value, 1) && testEmailAddress(email.value)) {
    try {
      console.log(password.value);
      console.log(email.value);

      const data = {
        identifier: email.value,
        password: password.value,
      };

    //   console.log(axios);
    //   const response = await axios.post(`${BASE_URL}/api/auth/local`, data);

    //   console.log(response);

      let headers = { 'Content-Type': 'application/json' };

      const resp = await fetch(`${BASE_URL}/api/auth/local`, {
        method: 'POST',
        data,
        headers,
      });

      // alert(resp);
      console.log('response: ', resp);

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
