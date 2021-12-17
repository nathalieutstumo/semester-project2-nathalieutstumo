if (localStorage.getItem('cart') !== null) {
    var total = 0;
    var items = JSON.parse(localStorage.getItem('cart'));
  
    items.forEach(function(element) {
      document.querySelector('.cart__content').innerHTML +=
      '<li>' +
        element.title + ' ' + element.price + 'NOK' + ' Quantity: ' + element.quantity
      '</li>';
      total = total + (element.price * element.quantity)
    })
  
    document.querySelector('.cart__total').innerHTML = 'TOTAL :' + total + 'NOK';
  
  }
  