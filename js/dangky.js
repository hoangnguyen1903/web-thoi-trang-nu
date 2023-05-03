$(document).ready(function () {
  let stt = 1;

  function checkName(name) {
    let patternName = /^[A-Z][a-z0-9_-]{2,}$/;
    let arrName = name.toString().split(' ');
    let flag = false;

    arrName.forEach(function (el) {
      if (patternName.test(el) === false) {
        flag = true;
      }
    });

    return flag;
  }

  function checkEmail(email) {
    let patternEmail = /^[a-z0-9]{2,}@([a-z]{3,})\.([a-z]{2,})/;
    return patternEmail.test(email);
  }

  function checkPassword(password) {
    let patternPassword = /^[a-z0-9]{2,}@([0-9]{2,})/;
    return patternPassword.test(password);
  }

  $('#txtName').change(function (e) {
    if (checkName(e.target.value)) {
      $('.nameErr').text('*Tên bắt buộc có độ dài ít nhất 2 ký tự và bắt đầu mỗi chữ bằng in hoa');
      $('.nameErr').removeClass('text-success');
      $('.nameErr').addClass('text-danger');
    } else {
      $('.nameErr').text('*Tên hợp lệ');
      $('.nameErr').removeClass('text-danger');
      $('.nameErr').addClass('text-success');
    }
  });

  $('#txtEmail').change(function (e) {
    if (checkEmail(e.target.value) === false) {
      $('.emailErr').text('*Email không hợp lệ');
      $('.emailErr').removeClass('text-success');
      $('.emailErr').addClass('text-danger');
    } else {
      $('.emailErr').text('*Email hợp lệ');
      $('.emailErr').removeClass('text-danger');
      $('.emailErr').addClass('text-success');
    }
  });

  $('#txtPassword').change(function (e) {
    if (checkPassword(e.target.value) === false) {
      $('.passwordErr').text('*Mật khẩu bắt buộc theo cú pháp hello@123');
      $('.passwordErr').removeClass('text-success');
      $('.passwordErr').addClass('text-danger');
    } else {
      $('.passwordErr').text('*Mật khẩu hợp lệ');
      $('.passwordErr').removeClass('text-danger');
      $('.passwordErr').addClass('text-success');
    }
  });

  $('#retypePass').change(function (e) {
    let password = $('#txtPassword').val();
    if (password !== e.target.value) {
      $('.retypePassErr').text('*Mật khẩu không trùng khớp');
      $('.retypePassErr').removeClass('text-success');
      $('.retypePassErr').addClass('text-danger');
    } else {
      $('.retypePassErr').text('*Mật khẩu trùng khớp');
      $('.retypePassErr').removeClass('text-danger');
      $('.retypePassErr').addClass('text-success');
    }
  });

  $('form').submit(function (e) {
    e.preventDefault();
    let name = $('#txtName').val();
    let email = $('#txtEmail').val();
    let password = $('#txtPassword').val();
    let retypePass = $('#retypePass').val();

    if (
      checkName(name) === true ||
      checkEmail(email) === false ||
      checkPassword(password) === false ||
      retypePass !== password
    ) {
      return;
    }
    $('.table tbody').append(`
		<tr>
			<th scope="row">${++stt}</th>
			<td>${name}</td>
			<td>${email}</td>
			<td>${password}</td>
		</tr>
		`);
    $('.nameErr').removeClass('text-danger');
    $('.nameErr').removeClass('text-success');
    $('.nameErr').text('');
    $('#txtName').val('');

    $('.emailErr').removeClass('text-danger');
    $('.emailErr').removeClass('text-success');
    $('.emailErr').text('');
    $('#txtEmail').val('');

    $('.passwordErr').removeClass('text-danger');
    $('.passwordErr').removeClass('text-success');
    $('.passwordErr').text('');
    $('#txtPassword').val('');

    $('.retypePassErr').removeClass('text-danger');
    $('.retypePassErr').removeClass('text-success');
    $('.retypePassErr').text('');
    $('#retypePass').val('');
    $('.myModal').modal('hide');
  });

  $('.btn-reset').click(function (e) {
    e.preventDefault();
    $('.nameErr').removeClass('text-danger');
    $('.nameErr').removeClass('text-success');
    $('.nameErr').text('');
    $('#txtName').val('');

    $('.emailErr').removeClass('text-danger');
    $('.emailErr').removeClass('text-success');
    $('.emailErr').text('');
    $('#txtEmail').val('');

    $('.passwordErr').removeClass('text-danger');
    $('.passwordErr').removeClass('text-success');
    $('.passwordErr').text('');
    $('#txtPassword').val('');

    $('.retypePassErr').removeClass('text-danger');
    $('.retypePassErr').removeClass('text-success');
    $('.retypePassErr').text('');
    $('#retypePass').val('');
  });
});
