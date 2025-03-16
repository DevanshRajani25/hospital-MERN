//controller is for Authentication of fields

import { Message } from "../models/messageSchema.js";   //import Schema first
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";    //for resolving Promise
import ErrorHandler from "../middlewares/errorMiddleware.js";     //for any errors

export const sendMessage = catchAsyncErrors(async(req,res,next) => {
    
    const {lastName,firstName,email,phone,message} = req.body;

    if(!lastName || !firstName || !email || !phone || !message)
    {
        return next(new ErrorHandler("Please fill full form",400))
    }

    await Message.create({lastName,firstName,email,phone,message});
    res.status(200).json({
        success: true,
        message: "Message sent Successfully!"
    })
      
})