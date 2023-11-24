import express from "express";
import { getUsers, Register, Login, deleteUser, Logout } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

// router.get('/users', getUsers);
router.get('/', function (req, res, next) {
    res.send("halo Selamat Datang");
});

router.get('/users', verifyToken, getUsers);
router.delete('/users/:id', deleteUser);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);


export default router;