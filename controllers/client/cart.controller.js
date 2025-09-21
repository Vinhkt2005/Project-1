module.exports.cart =  async (req, res) => {
    // Dòng này sử dụng phương thức find({}) của model Tour để lấy tất cả các bản ghi (document) trong collection Tour từ cơ sở dữ liệu MongoDB.

    res.render('client/pages/cart', {
        pageTitle: 'Giỏ hàng',
    })
};