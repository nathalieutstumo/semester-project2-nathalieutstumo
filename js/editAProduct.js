// import alert from './components/alert.js';
import { BASE_URL, headers } from './configs/configs.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

let title = document.querySelector('#title');
let description = document.querySelector('#description');
let price = document.querySelector('#price');
let img = document.querySelector('#img');
const form = document.querySelector('.form');

async function getSpecificCar() {
	// Extract URL to a variable
	const response = await axios.get(`${BASE_URL}/${id}`);

	// Bug fix destructoring not working
	let products = response.data;

	title.value = product.name;
	description.value = product.description;
    price.value = price.description;
	img.value = product.img_url;
}

getSpecificCar();

form.onsubmit = async function (event) {
	event.preventDefault();
	let updatedProduct = {
		title: title.value,
		description: description.value,
        price: price.value,
		img_url: img.value,
	};

	const response = await axios.put(
		`${BASE_URL}/${id}`,
		updatedProduct,
		headers
	);

	alert('alert-success', 'Car has been updated successfully');

	console.log(response);
};
