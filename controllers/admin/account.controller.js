const AccountAdmin = require('../../models/account-admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateHelper = require('../../helpers/generate.helper');

module.exports.login = async (req, res) => {
    res.render('admin/pages/login', {
        pageTitle: 'Đăng nhập',
    });
};

module.exports.loginPost = async (req, res) => {
    const {email, password, rememberPassword} = req.body;

    
    const existAccount = await AccountAdmin.findOne({ 
        email: email 
    });
    if (!existAccount) {
        return res.json({
            code: "error",
            message: 'Email không tồn tại',
        })
        return;
    }
    const isPasswordValid = await bcrypt.compare(password, existAccount.password);
    if (!isPasswordValid) {
        return res.json({
            code: "error",
            message: 'Mật khẩu không chính xác',
        })
        return;
    }

    if(existAccount.status !== "active") {
        return res.json({
            code: "error",
            message: 'Tài khoản chưa được kích hoạt',
        })
        return;
    }

    const token = jwt.sign({
        id: existAccount._id,
        email: existAccount.email,
    }, process.env.JWT_SECRET, 
    {
         expiresIn: rememberPassword ? '7d' : '1h' 
    });

    res.cookie('token', token, { 
        maxAge: rememberPassword ? 1000 * 60 * 60 * 24 * 7 : 1000 * 60 * 60 ,
        httpOnly: true,
        sameSite: 'strict',
    });


    res.json({
        code: "success",
        message: 'Đăng nhập thành công vào hệ thống',
    })
}

module.exports.register = async (req, res) => {
    res.render('admin/pages/register', {
        pageTitle: 'Đăng ký',
    });
};

module.exports.registerPost = async (req, res) => {
    const existAccount = await AccountAdmin.findOne({ 
        email: req.body.email 
    });
    if (existAccount) {
        return res.json({
            code: "error",
            message: 'Email đã tồn tại',
        });
        return;
    }

    req.body.status = "initial";

    // mã hóa mật khẩu 
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    const newAccount = new AccountAdmin(req.body);
    await newAccount.save();

    res.json({
        code:"success",
        message: 'Đăng ký thành công',
    });
};

module.exports.registerInitial = async (req, res) => {
    res.render('admin/pages/register-initial', {
        pageTitle: 'Tài khoản đã được khởi tạo',
    });
};

module.exports.forgotPassword = async (req, res) => {
    res.render('admin/pages/forgot-password', {
        pageTitle: 'Quên mật khẩu',
    });
};

module.exports.forgotPasswordPost = async (req, res) => {
    console.log(req.body);
    const {email} = req.body;

    //kiểm tra xem email có tồn tại trong hệ thống không 
    const existAccount = await AccountAdmin.findOne({ 
        email: email,
        status: "active"
    });
    if (!existAccount) {
        return res.json({
            code: "error",
            message: 'Email không tồn tại',
        })
        return;
    }
    // tạo mã OTP
    const otp = generateHelper.generateRandomNumber(6);
    


    // lưu vào CSDL bản ghi mới: gồm email và otp, lưu trong 5 phút

    // gửi mã otp tự động qua email.
};

module.exports.resetPassword = async (req,res) =>{
    res.render('admin/pages/reset-password', {
        pageTitle: 'Đổi mật khẩu',
    });
};

module.exports.otpPassword = async (req,res) =>{
    res.render('admin/pages/otp-password', {
        pageTitle: 'Nhập mã OTP',
    });
};
module.exports.logoutPost = async (req,res) =>{
    res.clearCookie('token');
    res.json({
        code: "success",
        message: 'Đăng xuất thành công',
    });
};


