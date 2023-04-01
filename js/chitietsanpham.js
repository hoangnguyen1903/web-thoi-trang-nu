$(document).ready(function () {
  const comments = [
    {
      id: 1,
      name: 'Chau Tiểu Long',
      imgUrl: '../img/img-avatar-1.png',
      textComment: 'Tôi cảm thấy rất hài lòng với sản phẩm này. Luôn ủng hộ shop.',
      datePost: '15/02/2023',
    },
    {
      id: 2,
      name: 'Trần Tuấn Anh',
      imgUrl: '../img/img-avatar-2.png',
      textComment: 'Chất lượng sản phẩm rất tốt. Giao hàng đúng thời hạn. Mức giá hợp lý.',
      datePost: '19/03/2023',
    },
    {
      id: 3,
      name: 'Nguyễn Thị Thanh Hằng',
      imgUrl: '../img/img-avatar-3.png',
      textComment:
        'Sản phẩm rất đẹp phù hợp với nhiều vóc dáng phụ nữ. Mức giá quá rẻ so với chất lượng sản phẩm. Cực kỳ yêu thích mặt hàng này..',
      datePost: '24/04/2023',
    },
  ];

  $('.selected__link').click(function () {
    $('.selected__link').removeClass('active');
    $(this).addClass('active');

    $('.selected__link').parent('li').removeClass('border-dark border-bottom');
    $(this).parent('li').addClass('border-dark border-bottom');
    let productName = $('.product__name').val;

    $('.content').html('');
    if ($(this).text() === 'Thông Tin Sản Phẩm') {
      $('.content').append(`<p>Miêu tả: ${productName}.</p>
            <p>Đặc tính: Trẻ trung - Năng động.</p>
            <p>Thể loại: Trang phục dạo phố, thường ngày.</p>
            <p>Size: S/M/L.</p>
            <p>Chất liệu: Thun cotton.</p>
            <p>Màu sắc: Trắng/Đen.</p>
            <p>Lưu ý: Không ngâm, tẩy. Giặt nhẹ. Ủi mặt trái áo với nhiệt độ thấp.</p>
            <p>Số đo mẫu nữ: Chiều cao: 168 cm. Số đo 3 vòng: 83 - 59 - 86 (Mặc size S).</p>`);
    }

    if ($(this).text() === 'Hướng Dẫn Mua Hàng') {
      $('.content').append(`<h5 class="fw-bold mt-4">1. Giới thiệu</h5>
            <p>Chào mừng quý khách hàng đến với website chúng tôi.</p>
            <p>
              Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng
              ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ
              bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các thay
              đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi
              quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng
              tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.
            </p>
            <p>
              Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng
              tôi.
            </p>

            <h5 class="fw-bold mt-4">2. Hướng dẫn sử dụng website</h5>
            <p>
              Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự
              giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi
              dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp
              luật Việt Nam.
            </p>
            <p>
              Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu
              không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link
              ở dưới cùng trong mọi email quảng cáo.
            </p>

            <h5 class="fw-bold mt-4">3. Thanh toán an toàn và tiện lợi</h5>
            <p>
              Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng
              phương thức phù hợp:
            </p>
            <p>
              <span class="fst-italic">Cách 1:</span> Thanh toán trực tiếp (người mua nhận hàng tại
              địa chỉ người bán)
            </p>
            <p>
              <span class="fst-italic">Cách 2:</span> Thanh toán sau (COD - giao hàng và thu tiền
              tận nơi)
            </p>
            <p>
              <span class="fst-italic">Cách 3:</span> Thanh toán online qua thẻ tín dụng, chuyển
              khoản
            </p>`);
    }

    if ($(this).text() === 'Chính Sách Đổi Trả') {
      $('.content').append(`<h5 class="fw-bold mt-4">1. Điều kiện đổi trả</h5>
            <p>
              Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay
              tại thời điểm giao/nhận hàng trong những trường hợp sau:
            </p>
            <p>
              Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại
              thời điểm đặt hàng. Không đủ số lượng, không đủ bộ như trong đơn hàng. Tình trạng bên
              ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…
            </p>
            <p>
              Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn
              thành việc hoàn trả/đổi trả hàng hóa.
            </p>

            <h5 class="fw-bold mt-4">2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</h5>
            <p>
              <span class="fst-italic">Thời gian thông báo đổi trả:</span> trong vòng 48h kể từ khi
              nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.
            </p>
            <p>
              <span class="fst-italic">Thời gian gửi chuyển trả sản phẩm:</span> trong vòng 14 ngày
              kể từ khi nhận sản phẩm.
            </p>
            <p>
              <span class="fst-italic">Địa điểm đổi trả sản phẩm:</span> Khách hàng có thể mang hàng
              trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.
            </p>
            <p>
              Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng
              sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.
            </p>`);
    }
    if ($(this).text() === 'Bình Luận') {
      $('.content').append(`
      <div class='card'>
        <div class="card-footer py-3 border-0" style="background-color: #f8f9fa">
            <div class="d-flex flex-start w-100">
              <img
                class="rounded-circle shadow-1-strong me-3"
                src="../img/img-avatar-4.png"
                alt="avatar"
                width="40"
                height="40"
              />
              <div class="form-outline w-100">
                <label class="form-label" for="textAreaExample">Bình luận</label>
                <textarea
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  style="background: #fff"
                  placeholder="Hãy để lại bình luận ở đây!"
                ></textarea>
              </div>
            </div>
            <div class="float-end mt-2 pt-1">
              <button type="button" class="btn btn-primary btn-sm post">Đăng tải</button>
              <button type="button" class="btn btn-outline-primary btn-sm reset">Hủy bỏ</button>
            </div>
        </div>
      </div>`);

      comments.filter((item) => {
        const tempCard = `
        <div class="card-body">
          <div class="d-flex flex-start align-items-center">
            <img
              class="rounded-circle shadow-1-strong me-3"
              src=${item.imgUrl}
              alt="avatar"
              width="60"
              height="60"
            />
            <div>
              <h6 class="fw-bold text-primary mb-1">${item.name}</h6>
              <p class="text-muted small mb-0">Đã chia sẽ - ${item.datePost}</p>
            </div>
          </div>

          <p class="mt-3 mb-4 pb-2">
            ${item.textComment}
          </p>

          <div class="small d-flex justify-content-start">
            <a href="#" class="d-flex align-items-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hand-thumbs-up"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                />
              </svg>
              <p class="mb-0 ms-2">Thích</p>
            </a>
            <a href="#" class="d-flex align-items-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
                <path
                  d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
                />
              </svg>
              <p class="mb-0 ms-2">Bình luận</p>
            </a>
            <a href="#!" class="d-flex align-items-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
              <p class="mb-0 ms-2">Chia sẻ</p>
            </a>
          </div>
        </div>
        `;
        $('.card').prepend(tempCard);
      });

      $('.post').click(function () {
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1;
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        let newDate = day + '/' + month + '/' + year;
        let text = $('#textAreaExample').val();

        const tempCard = `
        <div class="card-body">
          <div class="d-flex flex-start align-items-center">
            <img
              class="rounded-circle shadow-1-strong me-3"
              src='../img/img-avatar-4.png'
              alt="avatar"
              width="60"
              height="60"
            />
            <div>
              <h6 class="fw-bold text-primary mb-1">Người Lạ</h6>
              <p class="text-muted small mb-0">Đã chia sẽ - ${newDate}</p>
            </div>
          </div>

          <p class="mt-3 mb-4 pb-2">
            ${text}
          </p>

          <div class="small d-flex justify-content-start">
            <a href="#" class="d-flex align-items-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hand-thumbs-up"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                />
              </svg>
              <p class="mb-0 ms-2">Thích</p>
            </a>
            <a href="#" class="d-flex align-items-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
                <path
                  d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
                />
              </svg>
              <p class="mb-0 ms-2">Bình luận</p>
            </a>
            <a href="#!" class="d-flex align-items-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
              <p class="mb-0 ms-2">Chia sẻ</p>
            </a>
          </div>
        </div>
        `;
        $('.card-footer').before(tempCard);
      });

      $('.reset').click(function () {
        $('#textAreaExample').val('');
      });
    }
  });

  $('.img-secondary').click(function () {
    let imgUrl = $(this).attr('src');
    $('.img-primary').attr('src', imgUrl);
  });
});
