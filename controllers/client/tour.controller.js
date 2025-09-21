const Tour = require('../../models/tour.model'); //nhúng thư viện tour.model vào dự án để có thể sự dụng


module.exports.list =  async (req, res) => {
    // Dòng này sử dụng phương thức find({}) của model Tour để lấy tất cả các bản ghi (document) trong collection Tour từ cơ sở dữ liệu MongoDB.
    const tourList = await Tour.find({});

    res.render('client/pages/tour-list', {
        pageTitle: 'Danh sách tour',
        tourList: tourList
    })
};

module.exports.detail =  async (req, res) => {
    // Dòng này sử dụng phương thức find({}) của model Tour để lấy tất cả các bản ghi (document) trong collection Tour từ cơ sở dữ liệu MongoDB.

    res.render('client/pages/tour-detail', {
        pageTitle: 'Chi tiết tour',
    })
};