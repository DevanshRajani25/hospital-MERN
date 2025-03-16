import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain at least 3 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain at least 3 characters"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 digits"],
        maxLength: [10, "Phone number must contain 10 digits"],
    },
    nic: {
        type: String,
        required: true,
        minLength: [13, "NIC must contain at least 13 digits"],
        maxLength: [13, "NIC must contain at least 13 digits"],
    },
    dob: {
        type: Date,
        required: [true, "DOB is required"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must contain at least 8 characters"],
        select: false,
    },
    role: {
        type: String,
        enum: ["Admin", "Patient", "Doctor"],
        default: "Patient", // Default role if not specified
    },
    doctorDepartment: {
        type: String
    },
    docAvatar: {
        public_id: String,
        url: String,
    },
});

// Hashing password for Safety purpose
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

// Comparing currently entered password to the hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
        return false;
    }
};

// Generating a token when registration occurs
userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model("User",userSchema);
