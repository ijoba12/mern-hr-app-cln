import USER from "../models/userModel.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import fs from "fs";
import { v2 as cloudinary } from 'cloudinary';

export const signup = async (req, res) => {
  // if (req.user.role !== 'admin') {
  //   return res.status(403).json({ success: false, errMsg: "Access denied. Admins only." });
  // }
  const {
    firstName,
    lastName,
    mobileNumber,
    email,
    dateOfBirth,
    maritalStatus,
    gender,
    address,
    profileImage,
    officeOfEmployment,
    jobTitle,
    department,
    employmentStatus,
    salary,
    startDate,
    password,
    confirmPassword,
  } = req.body;

  try {
    if (
      !firstName ||
      !lastName ||
      !mobileNumber ||
      !email ||
      !dateOfBirth ||
      !maritalStatus ||
      !gender ||
      !address ||
      !officeOfEmployment ||
      !jobTitle ||
      !department ||
      !employmentStatus ||
      !salary ||
      !startDate ||
      !password ||
      !confirmPassword
    ) {
      res
        .status(400)
        .json({
          success: false,
          errMsg: "all fields are required to register...",
        });
      return;
    }
    if (password !== confirmPassword) {
      res.status(400).json({
        success: false,
        errMsg: "password and confirm password must match",
      });
      return;
    }
    const existingEmail = await USER.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ success: false, errMsg: "Email already exists" });
      return;
    }
    // 
    if (!req.files || !req.files.profileImage) {
      return res.status(400).json({ success: false, errMsg: "Profile image is required" });
    }

    const result = await cloudinary.uploader.upload(
      req.files.profileImage.tempFilePath,
      {
        use_filename: true,
        folder: "hr_manager",
      }
    );

    req.body.profileImage = result.secure_url;

    fs.unlinkSync(req.files.profileImage.tempFilePath);

    const user = await USER.create({ ...req.body });
    res
      .status(201)
      .json({
        success: true,
        message: "registration successful welcome mail has also been sent",
        user,
      });
    const clientUrl = process.env.CLIENT_URL;

    try {
      await sendWelcomeEmail({
        to: user.email,
        firstName: user.firstName,
        clientUrl,
      });
    } catch (emailError) {
      console.error("Error sending welcome Email", emailError);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const signIn = async(req,res)=>{
  
}