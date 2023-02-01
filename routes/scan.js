const express = require('express');
const scanController = require('../controller/scan_controller');
const protect = require('../middlewares/protect');
const router = express.Router();
router.use(protect); //  protect all router which are comming after this middleware

router.get('/:page', scanController.scan);
module.exports = router;