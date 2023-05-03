$(document).ready(function () {
  function checkAccount(email, password) {
    let accountList = $('.table').children('tbody').children('tr');
    let flagEmail = false;
    let flagPassword = false;
    accountList.each(function () {
      if ($(this).children('.email').text() === email) {
        flagEmail = true;
        if ($(this).children('.password').text() === password) {
          flagPassword = true;
          $(this).children('.status').text('Đang hoạt động');
          $(this).children('.status').addClass('text-success');
        }
        return false;
      }

      return true;
    });
    if (flagEmail === false) {
      $('.emailErr').text('*Tên đăng nhập không chính xác');
      $('.emailErr').addClass('text-danger');
      return false;
    }

    if (flagEmail && flagPassword === false) {
      $('.emailErr').text('');
      $('.passwordErr').text('*Mật khẩu không chính xác');
      $('.passwordErr').addClass('text-danger');
      return false;
    }

    if (flagEmail && flagPassword) {
      $('.emailErr').text('');
      $('.passwordErr').text('');
      $('#txtEmail').val('');
      $('#txtPassword').val('');
      return true;
    }
  }

  $('form').submit(function (e) {
    e.preventDefault();
    let email = $('#txtEmail').val();
    let password = $('#txtPassword').val();

    if (checkAccount(email, password) === false) {
      return;
    }

    $('.emailErr').text('');
    $('.emailErr').removeClass('text-success');
    $('.emailErr').removeClass('text-danger');

    $('.passwordErr').text('');
    $('.passwordErr').addClass('text-success');
    $('.passwordErr').addClass('text-danger');

    $('.myModal').modal('hide');
  });
});
