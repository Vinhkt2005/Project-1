const express = require ('express'); //nhúng thư viện express vào dự án để có thể sự dụng
const path = require ('path'); //nhúng thư viện path vào dự án để có thể sự dụng để dự án khi đẩy lên online
//  có thể chỉ ra vị trí thư mục chứa code giao diện
const mongoose = require ('mongoose'); //nhúng thư viện mongoose vào dự án để có thể sự dụng
const clientRoutes = require('./routes/client/index.route'); //nhúng thư viện index.route vào dự án để có thể sự dụng
require('dotenv').config(); //nhúng thư viện dotenv vào dự án để có thể sự dụng
const app = express(); //khởi tạo  express để tạo server
const port = 3000; //khởi tạo port để server chạy ( có thể để cổng tùy chọn 3000 hoặc 3001 hoặc 3002)

// Kết nối với cơ sở dữ liệu mongoDB
mongoose.connect(process.env.DATABASE);



// thiết lập cho dự án này biết thư mục chứa code giao diện là gì 
app.set('views', path.join(__dirname, 'views'));
// sử dụng biến __dirname thay vì fix cứng là project1 vì khi đẩy lên online sẽ không biết vị trí 
//thư mục chứa code giao diện, path.join là hàm để nối đường dẫn thư mục
// __dirname là biến để lấy vị trí thư mục chứa code giao diện
// 'views' là tên thư mục chứa code giao diện
// path.join(__dirname, 'views') là đường dẫn thư mục chứa code giao diện

app.set('view engine', 'pug');// Thiết lập template engine mà chúng ta dùng để render code giao diện

app.use(express.static(path.join(__dirname, 'public'))); // Thiết lập cho dự án này biết thư mục chứa file tĩnh 

app.use ('/', clientRoutes); // Sử dụng các route đã khai báo trong file index.route.js


app.listen(port, () => { // app.listen là hàm để server chạy
    // port là port để server chạy ( có thể để cổng tùy chọn 3000 hoặc 3001 hoặc 3002)
    // () => { là hàm để server chạy
    console.log(`Website đang chạy trên cổng ${port}`);
})
