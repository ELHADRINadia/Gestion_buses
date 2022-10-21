const express = require("express")
const router = express.Router()
const { getAllbas , createUser , UpdateUser, deleteOneUser} = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-user/:id", UpdateUser );
router.delete("/delete-user/:id", deleteOneUser);

module.exports = router
