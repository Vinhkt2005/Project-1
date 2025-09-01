const express = require ('express'); //nhúng thư viện express vào dự án để có thể sự dụng
const path = require ('path'); //nhúng thư viện path vào dự án để có thể sự dụng để dự án khi đẩy lên online
//  có thể chỉ ra vị trí thư mục chứa code giao diện
const app = express(); //khởi tạo  express để tạo server
const port = 3000; //khởi tạo port để server chạy ( có thể để cổng tùy chọn 3000 hoặc 3001 hoặc 3002)

// thiết lập cho dự án này biết thư mục chứa code giao diện là gì 
app.set('views', path.join(__dirname, 'views'));
// sử dụng biến __dirname thay vì fix cứng là project1 vì khi đẩy lên online sẽ không biết vị trí 
//thư mục chứa code giao diện, path.join là hàm để nối đường dẫn thư mục
// __dirname là biến để lấy vị trí thư mục chứa code giao diện
// 'views' là tên thư mục chứa code giao diện
// path.join(__dirname, 'views') là đường dẫn thư mục chứa code giao diện

app.set('view engine', 'pug');// Thiết lập template engine mà chúng ta dùng để render code giao diện

app.get('/', (req, res) => { // ('/' là trang chủ ( tên route )) khởi tạo route để server chạy, 
// đứng từ app gọi vào hàm get để lấy dữ liệu từ server
// (req, res) là tham số để lấy dữ liệu từ server, req là request là dữ liệu từ fontend gửi về phía backend,
//  res là response là dữ liệu từ backend gửi về phía fontend
    res.render('client/pages/home', {
        pageTitle: 'Trang chủ',
    });
    // res.render là hàm để render code giao diện
    // 'client/pages/home' là đường dẫn thư mục chứa code giao diện
    // (req, res) là tham số để lấy dữ liệu từ server, req là request là dữ liệu từ fontend gửi về phía backend,
    //  res là response là dữ liệu từ backend gửi về phía fontend
});

app.get('/tours', (req, res) => {
    res.render('client/pages/tour-list', {
        pageTitle: 'Danh sách tour',
    });
});

app.listen(port, () => { // app.listen là hàm để server chạy
    // port là port để server chạy ( có thể để cổng tùy chọn 3000 hoặc 3001 hoặc 3002)
    // () => { là hàm để server chạy
    console.log(`Website đang chạy trên cổng ${port}`);
});
