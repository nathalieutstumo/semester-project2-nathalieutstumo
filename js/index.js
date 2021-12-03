async function getMeData() {
    const response = await fetch('http://localhost:1337/heroimgs/1');
    const data = await response.json();
   
	// console.log('All results from data', jsonArray);
// console.log(data)
   
        document.querySelector('.hero__img').innerHTML += `
        <img class ="hero" src="${data.imgurl}">
        `
    }


getMeData();


async function getHeroProduct() {
    const response = await fetch('http://localhost:1337/products/4/');
    const data = await response.json();
   
console.log(data)
   
        document.querySelector('.hero__product').innerHTML += `
        <img class ="hero__display" src="${data.imgurl}">
        
        `
    }


getHeroProduct();

async function getFeaturedProducts() {
    const response = await fetch('http://localhost:1337/products/');
    const data = await response.json();
   
console.log(data)
if (data.featured === true) {
    console.log(data.featured)

    for (let i = 0; i < jsonArray.length; i++) {
        document.querySelector('.featured__products').innerHTML += `
        <div class="featured-products__card">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="shop_btn">
        <a href="details.html?id=${data.id}">Read More</a>
        </div>
        <p></p>
    </div>
        `;
      }

 
}
   
        
    }


getFeaturedProducts();

{/* <img class ="cardImg" src="${data.imgurl}"></img> */}
