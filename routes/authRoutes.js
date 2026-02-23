const router = require("express").Router();
const {
  registerAdmin,
  loginAdmin,
  getAdmins,
  deleteAdmin
} = require("../controllers/authController");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/all", getAdmins);
router.delete("/:id", deleteAdmin);

module.exports = router;