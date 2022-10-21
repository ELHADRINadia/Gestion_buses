const express = require("express")
const router = express.Router()
const { getAllUsers  } = require('../controllers/userController')
const authController = require('../controllers/authController')

router.get("/get-all-users", getAllUsers);
// router.get("/", getUser);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
