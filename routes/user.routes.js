import express from "express";

const router = express.Router();

import {
    register,
    login,
    getUsers,
    getUserById,
} from "../controllers/user.controllers.js";

router.post("/register", register);
router.post("/login", login);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
