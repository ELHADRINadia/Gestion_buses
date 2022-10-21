const express = require("express")
const router = express.Router()
const { getAllUsers , createUser } = require('../controllers/userController')

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-bus",update )
//     try {
//       await Bus.findByIdAndUpdate(req.body._id, req.body);
//       res.status(200).send({
//         message: "Bus updated successfully",
//         success: true,
//       });
//     } catch (error) {
//       res.status(500).send({ success: false, message: error.message });
//     }
//   });
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router
