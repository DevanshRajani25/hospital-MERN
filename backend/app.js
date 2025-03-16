import express from "express"
import {config} from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import messageRouter from "./router/messageRouter.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"
import userRouter from "./router/userRouter.js"

const app = express();
config({path: "./config/.env"})

app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))

app.use(cookieParser())  //getting cookies
app.use(express.json())   //string to object
app.use(express.urlencoded({extended: true}))  //formating the date
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))
 

app.use("/api/v1/message",messageRouter)
app.use("/api/v1/user",userRouter)

dbConnection();

app.use(errorMiddleware)
export default app;