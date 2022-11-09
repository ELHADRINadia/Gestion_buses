const express = require("express")
const router = express.Router()
const { getAllUsers , createUser , UpdateUser, deleteOneUser} = require('../controllers/userController')
const autControler = require('../controllers/authController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-user/:id", UpdateUser );
router.delete("/delete-user/:id", deleteOneUser);
router.post("/auth/login",autControler.login);
router.post("/auth/login",autControler.signup)

module.exports = router
