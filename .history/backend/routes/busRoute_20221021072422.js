const express = require('express');
const router = express.Router();
const { getbases, createbas, updatebas, deletebas } = require('../controllers/basController');

router.route('/').get(getbases);
router.route('/newbus').post(createbas);
router.route('/updatebus/:id').put(updatebas);
router.route('/deletebus/:id').delete(deletebas);

module.exports = router;