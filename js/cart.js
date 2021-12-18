  var cart_items = [];

if (localStorage.getItem('cart') === null) {

  document.querySelector('.cart__content').innerHTML = 'Cart is empty';

} else {

  var total = 0;

  cart_items = JSON.parse(localStorage.getItem('cart'));

  cart_items.forEach(function(element) {
    document.querySelector('.cart__content').innerHTML +=
    '<li>' +
    
    element.image + element.title + ' - ' + element.price + ' NOK - Quantity: ' + element.quantity + ' <button class="delete" data-id="'+element.id+'">X</button> '
    '</li>';
    total = total + (element.price * element.quantity);
  })

  document.querySelector('.cart__total').innerHTML = 'TOTAL : ' + total + 'NOK';

}

document.addEventListener('click',function(e){

  if(e.target.className === 'delete') {
    var total = 0;
    var index = cart_items.findIndex( (item) => item.id === parseInt(e.target.dataset.id));
    if (index >= 0) { // Delete if index found
      cart_items.splice(index, 1);
      var myobj = e.target.parentElement;
      myobj.remove();
      localStorage.setItem('cart', JSON.stringify(cart_items));
      cart_items.forEach(function(element) {
        total = total + (element.price * element.quantity);
      })
      document.querySelector('.cart__total').innerHTML = 'TOTAL : ' + total + 'NOK';
    }
  }

});