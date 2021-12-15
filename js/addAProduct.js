import alert from './components/alert.js';
import { BASE_URL, headers } from './configs/configs.js';

let carForm = document.querySelector('.form');

carForm.onsubmit = async function (event) {
	event.preventDefault();
	const name = document.querySelector('#title');
	const description = document.querySelector('#description');
    const price = document.querySelector('#price');
	const img = document.querySelector('#img');

	try {
		let newCar = {
			title: title.value,
			description: description.value,
            price: price.value,
			img_url: img.value,
		};

		let response = await axios.post(`${BASE_URL}`, newProducts, headers);
		alert('alert-success', 'Car has been created successfully');
		title.value = '';
		description.value = '';
        price.value = '';
		img.value = '';

		console.log(response);
	} catch (error) {
		alert('alert-danger', 'There was an error creating your car');
	}
};