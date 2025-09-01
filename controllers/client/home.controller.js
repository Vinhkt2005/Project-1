module.exports.home = (req, res) => {  res.render('client/pages/home', {
    pageTitle: 'Trang chủ',
});
// res.render là hàm để render code giao diện
// 'client/pages/home' là đường dẫn thư mục chứa code giao diện
// (req, res) là tham số để lấy dữ liệu từ server, req là request là dữ liệu từ fontend gửi về phía backend,
//  res là response là dữ liệu từ backend gửi về phía fontend
};