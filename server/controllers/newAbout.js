import express from "express";
import mongoose from "mongoose";
import newabout from "../models/newAbout.js";

const router = express.Router();

//read about
export const readAbout = async (req, res) => {
    const { id } = req.params;

  try {

    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);
   
    const readAbout = await newabout.findById(id);

    res.status(200).json({ data: readAbout });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//create about
export const createNewAbout = async (req, res) => {
  const { title, description } = req.body;
  try {
    const createNewAbout = await newabout.create({
      title: title,
      description: description,
    });
    res.status(201).json({ message: "Successfully created!", createNewAbout });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

//update about
export const updateNewAbout = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updateNewAbout = await newabout.updateOne(
      {
        _id: id,
      },
      {
        $set: { title: title, description: description },
      },
      {}
    );

    res.json(updateNewAbout);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//delete about
export const deleteAbout = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    await newabout.findByIdAndRemove(id);
  
    res.json({ message: "Successfully Deleted!" });
  };


// FACULTY SIDE read about by ID
export const getAboutFaculty = async (req, res) => {
    const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

    const getAboutFaculty = await newabout.findById(id);

    res.status(200).json({ data: getAboutFaculty });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export default router;
