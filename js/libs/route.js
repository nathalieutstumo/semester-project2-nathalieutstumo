import { getUser } from './localStorageHelpers.js';

if (getUser('jwt') === null) {
  window.location.href = './login.html';
}
