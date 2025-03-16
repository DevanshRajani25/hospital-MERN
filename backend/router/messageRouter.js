import express from "express"
import { sendMessage } from "../controller/messageController.js";

const router = express.Router();

router.post("/send",sendMessage)

export default router;

//1st Schema for message models -> messageSchema
//2nd Authentication for that message controller -> sendMessage
//3rd routing for that message routes -> messageRouter 