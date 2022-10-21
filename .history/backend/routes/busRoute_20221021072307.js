const express = require('express');
const router = express.Router();
const { getBuses, createBus, updateBus, deleteBus } = require('../controllers/busController');

router.route('/').get(getBuses);
router.route('/newbus').post(createBus);
router.route('/updatebus/:id').put(updateBus);
router.route('/deletebus/:id').delete(deleteBus);

module.exports = router;