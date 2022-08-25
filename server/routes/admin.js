import express from "express";

import {
  getFacultyData,
  updateVerify,
  updateAbout,
  AddUser,
  deleteUser,
  updateLLAdmin,
  updateWeAdmin,
  addVocAdmin,
  updatePersonalAdmin,
  updateEducAdmin,
  updateCivilAdmin,
} from "../controllers/admin.js";

import {  
    //new about
    readAbout,
    createNewAbout,
    updateNewAbout,
    deleteAbout
  } from '../controllers/newAbout.js'

const router = express.Router();

import authAdmin from "../middleware/authAdmin.js";

router.get("/", getFacultyData);
router.patch("/:id/updateVerify", authAdmin, updateVerify);
router.patch("/:id/updatePersonalAdmin", authAdmin, updatePersonalAdmin);
router.delete("/:id/deleteUser", authAdmin, deleteUser);
router.patch("/:id/updatePersonalAdmin", authAdmin, updatePersonalAdmin);
router.patch("/:id/updateEducAdmin", authAdmin, updateEducAdmin);
router.patch("/:id/updateCivilAdmin", authAdmin, updateCivilAdmin);
router.patch("/:id/updateLLAdmin", authAdmin, updateLLAdmin);
router.patch("/:id/updateWeAdmin", authAdmin, updateWeAdmin);
router.patch("/:id/addVocAdmin", authAdmin, addVocAdmin);
router.post("/AddUser", authAdmin, AddUser);
router.patch("/:id/updateAbout", authAdmin, updateAbout);

//crud newabout
router.get("/readAbout/:id", readAbout);
router.post("/createNewAbout", createNewAbout);
router.post("/updateNewAbout/:id", updateNewAbout);
router.delete("/deleteAbout/:id", deleteAbout);

export default router;
