import { Router } from "express";
import { addMultipleUsers, getAllPastUsers, getAllUsers, GoogleSignIn, loginUser, registerUser, searchUsers, updateAvatar, updateUser, verifyUserToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";
import {verifyAuth } from "../middlewares/auth.middleware.js"
 const router = Router();

router.post("/register", registerUser);
router.post('/addMany',addMultipleUsers )
router.post("/login", loginUser);
router.post("/gsignin",GoogleSignIn)
router.post("/update-avatar", verifyAuth, upload.single("avatar"), updateAvatar);
router.post("/update", verifyAuth, updateUser);
router.get('/verifyauth',verifyUserToken);
router.get('/past-members' , verifyAuth ,getAllPastUsers);
router.get('/search'  , searchUsers);
router.get('/all' , getAllUsers)
// router.get('')

export default router;