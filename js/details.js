const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

async function getPosts() {
    try {
        console.log(id)
        const response = await fetch('https://sem-project-api.herokuapp.com/api/products/' + id);
        const data = await response.json();
        const result = data.data;
        console.log (result);

        document.title = result.attributes.title;
        document.querySelector('main').innerHTML += `
            <div class="post">
                <h1>${result.attributes.title}</h1>
                <img class ="detailsImg" src="${result.attributes.imgurl}">
                <p>${result.attributes.description}</p>
                <p>${result.attributes.price}</p>
                <div class="add-cart__btn">
                <a class="cart" href="#">Add to cart</a>
                </div>
            </div>`;
        
    } catch (error) {
        console.log(error)
        document.querySelector('.alert').innerHTML = showAlertTouser(
            'error',
            'danger'
            );
    }

};  
getPosts();

