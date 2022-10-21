const express = require("express")
const router = express.Router()
const { getAllUsers , createUser , updateUser} = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/:id", updateUser );

// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
