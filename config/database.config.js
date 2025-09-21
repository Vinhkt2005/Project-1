const mongoose = require('mongoose');

module.exports.connect = async () =>  {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Kết nối với cơ sở dữ liệu mongoDB thành công');
    } catch (error) {
        console.log(error);
        console.log('Kết nối với cơ sở dữ liệu mongoDB thất bại');
    }

}