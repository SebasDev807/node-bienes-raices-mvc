import { check } from "express-validator";
import { formForgotMyPassword, formLogin, formSignIn, createAcount } from "../controllers/user.controller.js";
import { Router } from "express";
import { validateFields } from "../middlewares/validate-fields.js";


const router = Router();

router.get('/login', formLogin);

router.get('/signIn', formSignIn);

router.post('/signIn', createAcount);

router.get('/forgot-password', formForgotMyPassword);


export default router;