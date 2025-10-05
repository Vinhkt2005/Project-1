const jwt = require('jsonwebtoken');
const AccountAdmin = require('../../models/account-admin.model');

module.exports.verifyToken = async (req, res, next) => {
    try {
        const pathAdmin = req.app.locals.pathAdmin;
        const token = req.cookies.token;
        if (!token) {
            res.redirect(`/${pathAdmin}/account/login`);
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, email } = decoded;

        const existAccount = await AccountAdmin.findOne({
            _id: id,
            email: email,
            status: 'active',
        });

        if (!existAccount) {
            res.clearCookie('token');
            res.redirect(`/${pathAdmin}/account/login`);
            return;
        }

        next();
    } catch (error) {
        const pathAdmin = req.app.locals.pathAdmin;
        res.clearCookie('token');
        res.redirect(`/${pathAdmin}/account/login`);
    }
};