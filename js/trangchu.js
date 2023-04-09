$(document).ready(function () {
  let newArrivals = [
    {
      id: 1,
      name: 'ÁO THUN FORM BOXY IN “TAKE TO HEART”',
      imgUrl: '../img/img-shirt-1.1.jpeg',
      price: 399.0,
    },
    {
      id: 2,
      name: 'ÁO THUN FORM BOXY IN “MUSÉE”',
      imgUrl: '../img/img-shirt-2.1.jpeg',
      price: 299.0,
    },
    {
      id: 3,
      name: 'CHÂN VÁY A MINI TÚI TRANG TRÍ NÚT',
      imgUrl: '../img/img-skirt-3.1.jpeg',
      price: 399.0,
    },
    {
      id: 4,
      name: 'CHÂN VÁY MINI KIỂU XẾP ĐẮP',
      imgUrl: '../img/img-skirt-4.1.jpg',
      price: 199.0,
    },
    {
      id: 5,
      name: 'QUẦN DÀI ỐNG RỘNG GẬP GẤU',
      imgUrl: '../img/img-pant-5.1.jpeg',
      price: 599.0,
    },
    {
      id: 6,
      name: 'QUẦN JEANS LỬNG FORM SKINNY',
      imgUrl: '../img/img-pant-6.1.jpeg',
      price: 599.0,
    },
    {
      id: 7,
      name: 'ĐẦM NGẮN NHÚN NGỰC IN HOA',
      imgUrl: '../img/img-dress-5.1.jpeg',
      price: 599.0,
    },
    {
      id: 8,
      name: 'ĐẦM NHÚN NGỰC XOÈ BẸT VAI',
      imgUrl: '../img/img-dress-6.1.jpeg',
      price: 599.0,
    },
  ];
  let newDress = [
    {
      id: 1,
      name: 'ĐẦM XẾP NHÚN CHÉO NGỰC',
      imgUrl: '../img/img-dress-1.1.jpeg',
      price: 499.0,
    },
    {
      id: 2,
      name: 'ĐẦM THUN TAY DÀI NƠ NGỰC',
      imgUrl: '../img/img-dress-2.1.jpeg',
      price: 549.0,
    },
    {
      id: 3,
      name: 'ĐẦM NGẮN 2 TẦNG NGỰC XẾP',
      imgUrl: '../img/img-dress-3.1.jpeg',
      price: 649.0,
    },
    {
      id: 4,
      name: 'ĐẦM 2 DÂY DÀI BUỘC NƠ VAI',
      imgUrl: '../img/img-dress-4.1.jpeg',
      price: 599.0,
    },
  ];

  let imgUrl = null;
  $('.card-img-arrivals').filter(function (idx) {
    $(this).hover(
      function () {
        imgUrl = $(this).attr('src');
        $(this).attr('src', newArrivals[idx].imgUrl);
        $(this).css('cursor', 'zoom-in');
      },
      function () {
        $(this).attr('src', imgUrl);
      }
    );
  });

  $('.card-img-dress').filter(function (idx) {
    $(this).hover(
      function () {
        imgUrl = $(this).attr('src');
        $(this).attr('src', newDress[idx].imgUrl);
        $(this).css('cursor', 'zoom-in');
      },
      function () {
        $(this).attr('src', imgUrl);
      }
    );
  });
});
