$(document).ready(function () {
  function updateTotalPrice() {
    let totalPrice = 0;
    $('.product-price').filter(function () {
      if ($(this).text().split(',').length >= 3) {
        totalPrice += Number($(this).text().split(',')[0].concat($(this).text().split(',')[1]));
      } else {
        totalPrice += Number($(this).text().split(',')[0]);
      }
    });

    let shippingPrice = Number($('.shipping-price').text().split(',')[0]);
    let totalShippingPrice = totalPrice + shippingPrice;
    if (totalPrice >= 1000 && totalShippingPrice >= 1000) {
      $('.total-price').text(
        `${totalPrice.toString().slice(0, -3)},${totalPrice.toString().slice(-3)},000đ`
      );
      $('.total-shipping-price').text(
        `${totalShippingPrice.toString().slice(0, -3)},${totalShippingPrice
          .toString()
          .slice(-3)},000đ`
      );
    } else if (totalPrice < 1000 && totalShippingPrice >= 1000) {
      $('.total-price').text(`${totalPrice},000đ`);
      $('.total-shipping-price').text(
        `${totalShippingPrice.toString().slice(0, -3)},${totalShippingPrice
          .toString()
          .slice(-3)},000đ`
      );
    } else {
      $('.total-price').text(`${totalPrice},000đ`);
      $('.total-shipping-price').text(`${totalShippingPrice},000đ`);
    }
  }

  $('.btn-del').click(function () {
    $(this).parents('tr').remove();
    updateTotalPrice();
  });

  updateTotalPrice();

  $('.btn-increase').click(function () {
    const productNumber = $(this).siblings('.product-number');
    const maxProductNumber = 9;
    let productPrice = 0;

    if ($(this).parents('tr').find('.product-price').text().split(',').length >= 3) {
      productPrice =
        Number(
          $(this)
            .parents('tr')
            .find('.product-price')
            .text()
            .split(',')[0]
            .concat($(this).parents('tr').find('.product-price').text().split(',')[1])
        ) / Number(productNumber.val());
    } else {
      productPrice =
        Number($(this).parents('tr').find('.product-price').text().split(',')[0]) /
        Number(productNumber.val());
    }

    if (Number(productNumber.val()) >= maxProductNumber) {
      productNumber.val(maxProductNumber);
    } else {
      productNumber.val(Number(productNumber.val()) + 1);
    }

    const total = Number(productNumber.val() * productPrice);
    if (total >= 1000) {
      $(this)
        .parents('tr')
        .find('.product-price')
        .text(`${total.toString().slice(0, -3)},${total.toString().slice(-3)},000đ`);
    } else {
      $(this).parents('tr').find('.product-price').text(`${total},000đ`);
    }

    updateTotalPrice();
  });

  $('.btn-decrease').click(function () {
    const productNumber = $(this).siblings('.product-number');
    const minProductNumber = 1;
    let productPrice = 0;

    if ($(this).parents('tr').find('.product-price').text().split(',').length >= 3) {
      productPrice =
        Number(
          $(this)
            .parents('tr')
            .find('.product-price')
            .text()
            .split(',')[0]
            .concat($(this).parents('tr').find('.product-price').text().split(',')[1])
        ) / Number(productNumber.val());
    } else {
      productPrice =
        Number($(this).parents('tr').find('.product-price').text().split(',')[0]) /
        Number(productNumber.val());
    }

    if (Number(productNumber.val()) <= minProductNumber) {
      productNumber.val(minProductNumber);
    } else {
      productNumber.val(Number(productNumber.val()) - 1);
    }

    const total = Number(productNumber.val() * productPrice);
    if (total >= 1000) {
      $(this)
        .parents('tr')
        .find('.product-price')
        .text(`${total.toString().slice(0, -3)},${total.toString().slice(-3)},000đ`);
    } else {
      $(this).parents('tr').find('.product-price').text(`${total},000đ`);
    }

    updateTotalPrice();
  });
});
