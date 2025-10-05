const Joi = require('joi');

module.exports.registerPost = async (req, res, next) => {
    const schema = Joi.object({
        fullName: Joi.string()
            .required()
            .min(5)
            .max(50)
            .messages({
                'string.empty': 'Họ tên không được để trống',
                'string.min': 'Họ tên phải có ít nhất 5 ký tự',
                'string.max': 'Họ tên không được vượt quá 50 ký tự',
            }),
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.empty': 'Email không được để trống',
                'string.email': 'Email không đúng định dạng',
            }),
        password: Joi.string()
            .required()
            .min(8)
            .custom((value, helpers) => {
                if (!/[A-Z]/.test(value)) {
                    return helpers.error('password.uppercase');
                }
                if (!/[a-z]/.test(value)) {
                    return helpers.error('password.lowercase');
                }
                if (!/[0-9]/.test(value)) {
                    return helpers.error('password.number');
                }
                if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
                    return helpers.error('password.special');
                }
                return value;
            })
            .messages({
                'string.empty': 'Mật khẩu không được để trống',
                'string.min': 'Mật khẩu phải có ít nhất 8 ký tự',
                'password.uppercase': 'Mật khẩu phải có ít nhất 1 ký tự in hoa',
                'password.lowercase': 'Mật khẩu phải có ít nhất 1 ký tự thường',
                'password.number': 'Mật khẩu phải có ít nhất 1 số',
                'password.special': 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt',
            }),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details[0].message;
        res.json({
            code: 'error',
            message: errorMessage,
        });
        return;
    }

    next();
};

module.exports.loginPost = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .min(5)
            .max(50)
            .messages({
                'string.empty': 'Email không được để trống',
                'string.min': 'Email phải có ít nhất 5 ký tự',
                'string.max': 'Email không được vượt quá 50 ký tự',
            }),
        password: Joi.string()
            .required()

            .messages({
                'string.empty': 'Mật khẩu không được để trống',
            }),
        rememberPassword: Joi.boolean()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details[0].message;
        res.json({
            code: 'error',
            message: errorMessage,
        });
        return;
    }

    next();
};

module.exports.forgotPasswordPost = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .min(5)
            .max(50)
            .messages({
                'string.empty': 'Email không được để trống',
                'string.min': 'Email phải có ít nhất 5 ký tự',
                'string.max': 'Email không được vượt quá 50 ký tự',
            }),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details[0].message;
        res.json({
            code: 'error',
            message: errorMessage,
        });
        return;
    }

    next();
};