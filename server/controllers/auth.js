import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";
import nodemailer from "nodemailer";

const adminSec = "admin";
const facultySec = "faculty";
export const signin = async (req, res) => {
  const { email, password, status } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect password!" });

    if (existingUser.status === "unverified")
      return res.status(400).json({ message: "Account still not verified!" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      facultySec,
      { expiresIn: "8h" }
    );

    res
      .status(200)
      .json({
        message: "Account user signed-in!",
        result: existingUser,
        token,
      });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const {
    userType,
    email,
    password,
    confirmPassword,
    employeeNumber,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    age,
    placeOfBirth,
    gender,
    civilStatus,
    picture,
    mobile,
    status,
    nameExtension,
    height,
    weight,
    bloodType,
    gsisId,
    pagIbig,
    philHealthId,
    sss,
    tin,
    citizenship,
  } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password doesn't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      userType,
      email,
      password: hashedPassword,
      employeeNumber,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      age,
      placeOfBirth,
      gender,
      civilStatus,
      picture,
      mobile,
      status,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      facultySec,
      { expiresIn: "1h" }
    );

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webfmis@gmail.com",
        pass: "webfmispass",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let adminSendEmail = {
      from: result.email,
      to: "webfmisHR@gmail.com",
      subject: "Request to Verify",
      text: "A faculty member has sent a request to verify his/her account.",
    };

    transporter.sendMail(adminSendEmail);

    res
      .status(201)
      .json({ message: "Account successfully registered!", result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
