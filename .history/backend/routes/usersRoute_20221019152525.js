const express = require("express")
const router = express.Router()
const { getAllUsers , createUsse } = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", create-use);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
