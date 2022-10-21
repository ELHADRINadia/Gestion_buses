const express = require("express")
const router = express.Router()
const { getAllUsers , createUser , UpdateUser} = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-user", UpdateUser );
router.delete("/update-user", deleteUser);

module.exports = router
