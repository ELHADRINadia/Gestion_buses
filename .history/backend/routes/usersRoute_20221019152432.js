const express = require("express")
const router = express.Router()
const { getAllUsers  } = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.get("/register", getUser);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
