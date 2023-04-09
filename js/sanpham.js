function taoDanhSachSanPham(option = 'Áo') {
  const shirtList = [
    {
      id: 1,
      name: 'ÁO THUN FORM BOXY IN “TAKE TO HEART”',
      imgUrl: '../img/img-shirt-1.jpeg',
      price: 399.0,
    },
    {
      id: 2,
      name: 'ÁO THUN FORM BOXY IN “MUSÉE”',
      imgUrl: '../img/img-shirt-2.jpeg',
      price: 299.0,
    },
    {
      id: 3,
      name: 'ÁO SƠ MI LỆCH TÀ',
      imgUrl: '../img/img-shirt-3.jpeg',
      price: 399.0,
    },
    {
      id: 4,
      name: 'ÁO THUN FORM RỘNG IN RIGHT TIME',
      imgUrl: '../img/img-shirt-4.jpeg',
      price: 349.0,
    },
    {
      id: 5,
      name: 'ÁO THUN LỆCH VAI PHỐI NGỌC TRAI',
      imgUrl: '../img/img-shirt-5.jpeg',
      price: 399.0,
    },
    {
      id: 6,
      name: 'ÁO SƠ MI TAY DÀI LỆCH TÀ',
      imgUrl: '../img/img-shirt-6.jpeg',
      price: 449.0,
    },
  ];

  const dressList = [
    {
      id: 1,
      name: 'ĐẦM XẾP NHÚN CHÉO NGỰC',
      imgUrl: '../img/img-dress-1.jpeg',
      price: 499.0,
    },
    {
      id: 2,
      name: 'ĐẦM THUN TAY DÀI NƠ NGỰC',
      imgUrl: '../img/img-dress-2.jpeg',
      price: 549.0,
    },
    {
      id: 3,
      name: 'ĐẦM NGẮN 2 TẦNG NGỰC XẾP',
      imgUrl: '../img/img-dress-3.jpeg',
      price: 649.0,
    },
    {
      id: 4,
      name: 'ĐẦM 2 DÂY DÀI BUỘC NƠ VAI',
      imgUrl: '../img/img-dress-4.jpeg',
      price: 599.0,
    },
    {
      id: 5,
      name: 'ĐẦM NGẮN NHÚN NGỰC IN HOA',
      imgUrl: '../img/img-dress-5.jpeg',
      price: 599.0,
    },
    {
      id: 6,
      name: 'ĐẦM NHÚN NGỰC XOÈ BẸT VAI',
      imgUrl: '../img/img-dress-6.jpeg',
      price: 599.0,
    },
  ];

  const skirtList = [
    {
      id: 1,
      name: 'CHÂN VÁY MIDI XẾP',
      imgUrl: '../img/img-skirt-1.jpeg',
      price: 399.0,
    },
    {
      id: 2,
      name: 'CHÂN VÁY MINI CHẠY VIỀN',
      imgUrl: '../img/img-skirt-2.jpeg',
      price: 399.0,
    },
    {
      id: 3,
      name: 'CHÂN VÁY A MINI TÚI TRANG TRÍ NÚT',
      imgUrl: '../img/img-skirt-3.jpeg',
      price: 399.0,
    },
    {
      id: 4,
      name: 'CHÂN VÁY MINI KIỂU XẾP ĐẮP',
      imgUrl: '../img/img-skirt-4.jpg',
      price: 199.0,
    },
    {
      id: 5,
      name: 'CHÂN VÁY CHIFFON PHỐI CHÂN REN',
      imgUrl: '../img/img-skirt-5.jpeg',
      price: 199.0,
    },
    {
      id: 6,
      name: 'CHÂN VÁY QUẦN KIỂU ĐẮP PHỐI VIỀN',
      imgUrl: '../img/img-skirt-6.jpeg',
      price: 499.0,
    },
  ];

  const pantList = [
    {
      id: 1,
      name: 'QUẦN SUÔNG PHỐI LAI NẸP TRỤ',
      imgUrl: '../img/img-pant-1.jpeg',
      price: 499.0,
    },
    {
      id: 2,
      name: 'QUẦN TÂY ỐNG THẲNG',
      imgUrl: '../img/img-pant-2.jpeg',
      price: 399.0,
    },
    {
      id: 3,
      name: 'QUẦN DÀI ỐNG SUÔNG',
      imgUrl: '../img/img-pant-3.jpeg',
      price: 599.0,
    },
    {
      id: 4,
      name: 'SHORT LINEN ỐNG RỘNG',
      imgUrl: '../img/img-pant-4.jpeg',
      price: 299.0,
    },
    {
      id: 5,
      name: 'QUẦN DÀI ỐNG RỘNG GẬP GẤU',
      imgUrl: '../img/img-pant-5.jpeg',
      price: 599.0,
    },
    {
      id: 6,
      name: 'QUẦN JEANS LỬNG FORM SKINNY',
      imgUrl: '../img/img-pant-6.jpeg',
      price: 599.0,
    },
  ];

  if (option === 'Áo') {
    shirtList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-shirt-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center card-price">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-shirt-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'Đầm') {
    dressList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-dress-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-dress-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'Váy') {
    skirtList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-skirt-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-skirt-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'Quần') {
    pantList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="Áo ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-pant-${
                    idx + 1
                  }.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-pant-${
                    idx + 1
                  }.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
}

function taoBanner(option = 'Áo') {
  if (option === 'Áo') {
    return '../img/img-banner-shirt.jpg';
  }

  if (option === 'Đầm') {
    return '../img/img-banner-dress.jpg';
  }

  if (option === 'Váy') {
    return '../img/img-banner-skirt.jpg';
  }

  if (option === 'Quần') {
    return '../img/img-banner-pant.jpg';
  }
}

$(document).ready(function () {
  let tenloai = $('.selected').children('.active').text();

  $('.img-banner').attr('src', taoBanner(tenloai));
  $('.product__list').append(taoDanhSachSanPham(tenloai));

  $('.selected').click(function () {
    $('.selected').children().removeClass('active');
    $(this).children().addClass('active');
    $('.product__list').children().remove();

    let tenloai = $('.selected').children('.active').text();
    $('.breadcrumb .breadcrumb-item.active').text(tenloai);
    $('.img-banner').attr('src', taoBanner(tenloai));
    taoDanhSachSanPham(tenloai);
  });

  $('#form-search').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('.product__list .product').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $('#form-checkbox-100').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val < 100);
      })
      .toggle();
  });

  $('#form-checkbox-300').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 100 && val < 300);
      })
      .toggle();
  });

  $('#form-checkbox-500').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 300 && val < 500);
      })
      .toggle();
  });

  $('#form-checkbox-1000').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 500 && val < 1000);
      })
      .toggle();
  });

  $('#form-checkbox-2000').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 1000);
      })
      .toggle();
  });
});
