
const {   signUpUser, loginUser, logOutUser, updateAvatarUser, updateUserName, sendOTPVerify } = require('../controllers/userController');

const router = require("express").Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);
router.post("/updateavatar", updateAvatarUser);
router.post("/updatename", updateUserName);
router.post("/sendOTP", sendOTPVerify);


module.exports = router;