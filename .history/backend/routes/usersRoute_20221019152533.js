const express = require("express")
const router = express.Router()
const { getAllUsers , createUser } = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
