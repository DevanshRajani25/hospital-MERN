import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import {User} from "../models/userSchema.js"


//for first time patient registration
export const patientRegister = catchAsyncErrors(async(req,res,next) => {
    const {firstName, lastName, email, phone, dob, gender, nic, role, password} = req.body;

    if(!firstName || !lastName || !email|| !phone|| !dob|| !gender || !nic || !role || !password){
        return next(new ErrorHandler("Please fill full the form",400));
    }

    let user = await User.findOne({email })   //duplicate entry with same email not allowed!
    if(user){
        return next(new ErrorHandler("User already registered!",400))
    }
    user = await User.create({
        firstName, lastName, email, phone, dob, gender, nic, role, password
    });
    res.status(200).json({
        success : true,
        message : "User Registered!",
    })
});

//for User LogIn
export const login = catchAsyncErrors(async(req,res,next)=> {

    const {email,password,confirmPassword,role} = req.body;

    if(!email || !password || !confirmPassword || !role){  //all places are needed!
        return next (new ErrorHandler("Please fill full the form!",400))
    }

    if(password !== confirmPassword){   //Password and Confirm password must be same 
        return next (new ErrorHandler("Password and confirm password doesn't match!",400))
    }

    const user = await User.findOne({email}).select("+password")  //check whether user is existing or not
    if(!user){
        return next (new ErrorHandler("Invalid Password or Email",400))
    }

    const isPasswordMatched = await user.comparePassword(password);  //before hashed password and current passsword must be same
    if(!isPasswordMatched){
        return next (new ErrorHandler("Invalid Password or Email",400));
    }

    if(role !== user.role){
        return next (new ErrorHandler("User with this role not Found!",400))
    }

    res.status(200).json({  //all user condition satisfied --> Log In ho gaya
        success: true,
        message: "User logged In Successfully !!"
    })


})