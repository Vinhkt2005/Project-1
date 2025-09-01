const router = require('express').Router();
const homeRoutes = require('./home.route'); //nhúng thư viện home.route vào dự án để có thể sự dụng
const tourRoutes = require('./tour.route'); //nhúng thư viện tour.route vào dự án để có thể sự dụng

router.use('/', homeRoutes)

router.use('/tours', tourRoutes)

module.exports = router;