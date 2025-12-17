function sendMessage(event) {
  event.preventDefault(); // Ngăn form reload trang

  // Lấy dữ liệu từ form
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  // Tạo vùng hiển thị thông báo
  let feedback = document.getElementById('formFeedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.id = 'formFeedback';
    feedback.style.marginTop = '15px';
    feedback.style.fontWeight = 'bold';
    form.appendChild(feedback);
  }

  // Kiểm tra dữ liệu
  if (!name) {
    feedback.textContent = "❌ Bạn chưa nhập tên.";
    feedback.style.color = "red";
    return;
  }

  if (!email) {
    feedback.textContent = "❌ Bạn chưa nhập email.";
    feedback.style.color = "red";
    return;
  }

  if (!message) {
    feedback.textContent = "❌ Bạn chưa nhập tin nhắn.";
    feedback.style.color = "red";
    return;
  }

  // Nếu đủ dữ liệu
  feedback.textContent = "✅ Gửi thành công! Cảm ơn bạn đã liên hệ với Trạm Hoa.";
  feedback.style.color = "green";

  // Reset form sau khi gửi
  form.reset();
}