module.exports.list = async (req,res) =>{

    res.render('admin/pages/setting-list',{
        pageTitle: 'Quản lý cài đặt'
    });
}

module.exports.websiteInfo = async (req,res) =>{

    res.render('admin/pages/setting-website-info',{
        pageTitle: 'Thông tin website'
    });
}

module.exports.accountAdminList = async (req,res) =>{
    
    res.render('admin/pages/setting-account-admin-list',{
        pageTitle: 'Quản lý tài khoản quản trị'
    });
}

module.exports.accountAdminCreate = async (req,res) =>{
    
    res.render('admin/pages/setting-account-admin-create',{
        pageTitle: 'Tạo tài khoản quản trị'
    });
}

module.exports.roleList = async (req,res) =>{
    
    res.render('admin/pages/setting-role-list',{
        pageTitle: 'Quản lý vai trò'
    });
}

module.exports.roleCreate = async (req,res) =>{
    
    res.render('admin/pages/setting-role-create',{
        pageTitle: 'Tạo vai trò'
    });
}