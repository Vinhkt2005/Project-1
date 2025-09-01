const express = require ('express'); //nhúng thư viện express vào dự án để có thể sự dụng
const app = express(); //khởi tạo  express để tạo server
const port = 3000; //khởi tạo port để server chạy ( có thể để cổng tùy chọn 3000 hoặc 3001 hoặc 3002)

app.get('/', (req, res) => { // ('/' là trang chủ ( tên route )) khởi tạo route để server chạy, 
// đứng từ app gọi vào hàm get để lấy dữ liệu từ server
// (req, res) là tham số để lấy dữ liệu từ server, req là request là dữ liệu từ fontend gửi về phía backend,
//  res là response là dữ liệu từ backend gửi về phía fontend
    res.send('Trang chủ'); // res.send là hàm để gửi dữ liệu về fontend
});

app.get('/tours', (req, res) => {
    res.send('Trang danh sách  tour');
});

app.listen(port, () => { // app.listen là hàm để server chạy
    // port là port để server chạy ( có thể để cổng tùy chọn 3000 hoặc 3001 hoặc 3002)
    // () => { là hàm để server chạy
    console.log(`Website đang chạy trên cổng ${port}`);
});
