import express from "express";

import {
  getById,
  getAbout,
  updatePersonal,
  getByEmail,
  updateEmail,
  updatePassword,
  updateEduc,
  updateImage,
  deleteUser,
  addVoc,
  updateCivil,
  updateWe,
  updateLL,
} from "../controllers/user.js";

import {
  //Vocational
  readVoc,
  createVoc,
  updateVoc,
  deleteVoc,
  //College
  readCol,
  createCol,
  updateCol,
  deleteCol,
  //workexperiece
  createWorkExp,
  updateWorkExp,
  deleteWorkExp,
  readWorkExp,
  //training
  readTraining,
  createTraining,
  deleteTraining,
  updateTraining,


} from "../controllers/multipleEntry.js";

import {getAboutFaculty} from '../controllers/newAbout.js'

const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/:id", getById);
router.get("/", getByEmail);
router.get("/:id/getAbout", getAbout);
router.patch("/:id", auth, updatePersonal);
router.patch("/:id/updateEmail", auth, updateEmail);
router.patch("/:id/updatePassword", auth, updatePassword);
router.patch("/:id/updateEduc", auth, updateEduc);
router.patch("/:id/updateImage", auth, updateImage);
router.patch("/:id/updateCivil", auth, updateCivil);
router.patch("/:id/updateLL", auth, updateLL);
router.patch("/:id/updateWe", auth, updateWe);
router.delete("/:id/deleteUser", auth, deleteUser);
router.patch("/:id/addVoc", auth, addVoc);

//crud vocational
router.get("/readVoc/:id", readVoc);
router.post("/createVoc", createVoc);
router.post("/updateVoc/:id", updateVoc);
router.delete("/deleteVoc/:id", deleteVoc);

//crud college
router.get("/readCol/:id", readCol);
router.post("/createCol", createCol);
router.post("/updateCol/:id", updateCol);
router.delete("/deleteCol/:id", deleteCol);

//crud workexperience
router.get("/readWorkExp/:id", readWorkExp);
router.post("/createWorkExp", createWorkExp);
router.post("/updateWorkExp/:id", updateWorkExp);
router.delete("/deleteWorkExp/:id", deleteWorkExp);

//crud training
router.get("/readTraining/:id", readTraining);
router.post("/createTraining", createTraining);
router.post("/updateTraining/:id", updateTraining);
router.delete("/deleteTraining/:id", deleteTraining);

//read faculty about
router.get("/getAboutFaculty/:id", getAboutFaculty)

export default router;
