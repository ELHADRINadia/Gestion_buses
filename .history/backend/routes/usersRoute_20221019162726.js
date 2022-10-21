const express = require("express")
const router = express.Router()
const { getAllUsers , createUser , UpdateUser, deleteOneUser} = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-user", UpdateUser );
router.delete("/delete-user", deleteOneUser);

module.exports = router
