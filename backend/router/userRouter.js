import express from "express"
import { login, patientRegister } from "../controller/userController.js";

const router = express.Router();

router.post("/patient/patientregister",patientRegister)
router.post("/login",login)

export default router;