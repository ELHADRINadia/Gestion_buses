const express = require("express")
const router = express.Router()
const { getAllUsers , create-user } = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", create-user);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
