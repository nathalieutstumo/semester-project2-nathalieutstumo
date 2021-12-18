const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

// Initialiser vars som skal brukes globalt
var nr = 0;
var tittel = '';
var pris = 0;
var antall = 0

const button = document.querySelector('.cart');
button.addEventListener('click', event => {
  var cart_items = [];

  var new_item = {
    "id" : nr,
    "title" : tittel,
    "price" : pris,
    "quantity" : 1
  };

  // Hent handlekurv om det er noe i Storage
  if (localStorage.getItem('cart') !== null) {
    cart_items = JSON.parse(localStorage.getItem('cart'));
  }

  var index = cart_items.findIndex( (item) => item.id === new_item.id);
  if (index >= 0) { // Update
    cart_items[index].quantity += 1;
  } else { // Add


    cart_items.push(new_item);
  }

  localStorage.setItem('cart', JSON.stringify(cart_items));

});

async function getPosts() {
    try {
        console.log(id)
        const response = await fetch('https://sem-project-api.herokuapp.com/api/products/' + id);
        const data = await response.json();

        const result = data.data;

        /* DEBUG
        const result = {
            "id": 5,
            "attributes": {
                "title": "Day moisturizer",
                "imgurl": "https://mystifying-pasteur-0edf95.netlify.app//img/smartmockups_kvu82p4c%202.png",
                "createdAt": "2021-12-03T12:47:18.506Z",
                "updatedAt": "2021-12-10T10:35:48.731Z",
                "publishedAt": "2021-12-03T13:03:16.912Z",
                "featured": null,
                "locale": "en",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget tellus eros.",
                "price": 49.99
            }
        };
        */

        console.log (result);

        document.title = result.attributes.title;

        // set verdi til global vars som ble initialisert øverst
        nr = result.id
        tittel = result.attributes.title;
        pris = result.attributes.price;

        document.querySelector('main h1').innerHTML = result.attributes.title;
        document.querySelector('main img').src = result.attributes.imgurl;
        document.querySelector('main .detailInfo').innerHTML = '<p>' + result.attributes.description + '</p><p>' + result.attributes.price + '</p>';

    } catch (error) {
        console.log(error)
        document.querySelector('.alert').innerHTML = showAlertTouser(
            'error',
            'danger'
            );
    }

};

getPosts();
