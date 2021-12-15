import { getUser } from './localHelpers.js';

if (getUser('jwt') === null) {
	window.location.href = './login.html';
}
