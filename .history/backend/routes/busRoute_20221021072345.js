const express = require('express');
const router = express.Router();
const { getbases, createbas, updatebas, deletebas } = require('../controllers/busController');

router.route('/').get(getbases);
router.route('/newbus').post(createBus);
router.route('/updatebus/:id').put(updateBus);
router.route('/deletebus/:id').delete(deleteBus);

module.exports = router;