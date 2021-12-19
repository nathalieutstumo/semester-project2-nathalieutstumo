
async function getFooterLogo() {
    const response = await fetch('https://sem-project-strapi-nathalie.herokuapp.com/api/featuredimgs/3');
    const data = await response.json();
    const result = data.data;
   
	// console.log('All results from data', jsonArray);
// console.log(result)

document.querySelector('.footer__logo').innerHTML += `
<img class ="logo" src="${result.attributes.imgurl}">
<div class="footer__container">
<ul class="footer__links">
<li class="footer-item">
  <a class="footer-link active" aria-current="page" href="#">About us</a>
</li>
<li class="footer-item">
  <a class="footer-link" href="#">Shipping</a>
</li>
<li class="footer-item">
  <a class="footer-link" href="#">Work with us</a>
</li>
<li class="footer-item">
  <a class="footer-link" href="#">Frequently asked</a>
</li>
</ul>
</div>
`
}


getFooterLogo();
