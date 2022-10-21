const express = require("express")
const router = express.Router()
const { getAllUsers , Register } = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/register", Register);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
