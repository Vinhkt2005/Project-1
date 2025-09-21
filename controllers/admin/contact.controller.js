module.exports.list = async (req,res) =>{

    res.render('admin/pages/contact-list',{
        pageTitle: 'Quản lý liên hệ'
    });
}