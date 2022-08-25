import express from "express";
import mongoose from "mongoose";
const router = express.Router();

//modelsssss
import Vocational from "../models/vtcModel.js";
import College from "../models/colllegeModel.js";
import WorkExperience from "../models/workExpModel.js";
import Training from "../models/trainingModel.js";

//Read Vocational
export const readVoc = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);

    const readVocational = await Vocational.findById(id);
    res.status(201).json({ readVocational });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Create Vocatinal
export const createVoc = async (req, res) => {
  const {
    vemailConn,
    vnameOfSchool,
    vbasicEducDegreeCourse,
    vperiodOfAttendancefrom, //may nadagdag na type dito "vperiodOfAttendance(type)from alisin na lang"
    vperiodOfAttendanceto,
    vhighestLevelUnits,
    vyearGraduate,
    vscholarshipAcademicHonors,
  } = req.body;

  try {
    const createVoc = await Vocational.create({
      vemailConn: vemailConn,
      vnameOfSchool: vnameOfSchool,
      vbasicEducDegreeCourse: vbasicEducDegreeCourse,
      vperiodOfAttendancefrom: vperiodOfAttendancefrom,
      vperiodOfAttendanceto: vperiodOfAttendanceto,
      vhighestLevelUnits: vhighestLevelUnits,
      vyearGraduate: vyearGraduate,
      vscholarshipAcademicHonors: vscholarshipAcademicHonors,
    });
    res.status(201).json({ message: "Successfully Voc!", createVoc });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

//Update Vocational
export const updateVoc = async (req, res) => {
  const { id } = req.params;
  const {
    // vemailConn,
    vnameOfSchool,
    vbasicEducDegreeCourse,
    vperiodOfAttendancefrom,
    vperiodOfAttendanceto,
    vhighestLevelUnits,
    vyearGraduate,
    vscholarshipAcademicHonors,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateVocational = await Vocational.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        //vemailConn: vemailConn,
        vnameOfSchool: vnameOfSchool,
        vbasicEducDegreeCourse: vbasicEducDegreeCourse,
        vperiodOfAttendancefrom: vperiodOfAttendancefrom,
        vperiodOfAttendanceto: vperiodOfAttendanceto,
        vhighestLevelUnits: vhighestLevelUnits,
        vyearGraduate: vyearGraduate,
        vscholarshipAcademicHonors: vscholarshipAcademicHonors,
      },
    },
    {}
  );
  res.json(updateVocational);
};

//Delete Vocational
export const deleteVoc = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Vocational.findByIdAndRemove(id);

  res.json({ message: "Vocational deleted successfully." });
};

//Read College
export const readCol = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);

    const readCollege = await College.findById(id);
    res.status(201).json({ readCollege });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Create College
export const createCol = async (req, res) => {
  const {
    cemailConn,
    cnameOfSchool,
    cbasicEducDegreeCourse,
    cperiodOfAttendancefrom,
    cperiodOfAttendanceto,
    chighestLevelUnits,
    cyearGraduate,
    cscholarshipAcademicHonors,
  } = req.body;

  try {
    const createCol = await College.create({
      cemailConn: cemailConn,
      cnameOfSchool: cnameOfSchool,
      cbasicEducDegreeCourse: cbasicEducDegreeCourse,
      cperiodOfAttendancefrom: cperiodOfAttendancefrom,
      cperiodOfAttendanceto: cperiodOfAttendanceto,
      chighestLevelUnits: chighestLevelUnits,
      cyearGraduate: cyearGraduate,
      cscholarshipAcademicHonors: cscholarshipAcademicHonors,
    });
    res.status(201).json({ message: "Successfully Add College!", createCol });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

//Update College
export const updateCol = async (req, res) => {
  const { id } = req.params;
  const {
    //cemailConn,
    cnameOfSchool,
    cbasicEducDegreeCourse,
    cperiodOfAttendancefrom,
    cperiodOfAttendanceto,
    chighestLevelUnits,
    cyearGraduate,
    cscholarshipAcademicHonors,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateCollege = await College.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        // cemailConn: cemailConn,
        cnameOfSchool: cnameOfSchool,
        cbasicEducDegreeCourse: cbasicEducDegreeCourse,
        cperiodOfAttendancefrom: cperiodOfAttendancefrom,
        cperiodOfAttendanceto: cperiodOfAttendanceto,
        chighestLevelUnits: chighestLevelUnits,
        cyearGraduate: cyearGraduate,
        cscholarshipAcademicHonors: cscholarshipAcademicHonors,
      },
    },
    {}
  );
  res.json(updateCollege);
};

//Delete College
export const deleteCol = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await College.findByIdAndRemove(id);

  res.json({ message: "College deleted successfully." });
};

//Create Work Experience
export const createWorkExp = async (req, res) => {
  const {
    wemailConn,
    inclusiveFrom,
    inclusiveTo,
    posistionTitle,
    department,
    monthlySalary,
    salary,
    statusOfAppointment,
    govService,
  } = req.body;

  try {
    const createWorkExp = await WorkExperience.create({
      wemailConn: wemailConn,
      inclusiveFrom: inclusiveFrom,
      inclusiveTo: inclusiveTo,
      posistionTitle: posistionTitle,
      department: department,
      monthlySalary: monthlySalary,
      salary: salary,
      statusOfAppointment: statusOfAppointment,
      govService: govService,
    });
    res
      .status(201)
      .json({ message: "Successfully WorkExperience!", createWorkExp });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

//Update WorkExperience
export const updateWorkExp = async (req, res) => {
  const { id } = req.params;
  const {
    //wemailConn,
    inclusiveFrom,
    inclusiveTo,
    posistionTitle,
    department,
    monthlySalary,
    salary,
    statusOfAppointment,
    govService,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateWorkExp = await WorkExperience.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        //wemailConn: wemailConn,
        inclusiveFrom: inclusiveFrom,
        inclusiveTo: inclusiveTo,
        posistionTitle: posistionTitle,
        department: department,
        monthlySalary: monthlySalary,
        salary: salary,
        statusOfAppointment: statusOfAppointment,
        govService: govService,
      },
    },
    {}
  );
  res.json(updateWorkExp);
};

//Delete Work Experience
export const deleteWorkExp = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await WorkExperience.findByIdAndRemove(id);

  res.json({ message: "Work Experience deleted successfully." });
};

//Read WorkExp
export const readWorkExp = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);

    const readWorkExp = await WorkExperience.findById(id);
    res.status(201).json({ readWorkExp });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Training Crud Read
export const readTraining = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);

    const readTraining = await Training.findById(id);
    res.status(201).json({ readTraining });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Create Training
export const createTraining = async (req, res) => {
  const {
    temailConn,
    trainingPrograms,
    traininFrom,
    traininTo,
    numberOfHours,
    typeOfTraining,
    conducted,
    certificate,
  } = req.body;

  try {
    const createTraining = await Training.create({
      temailConn: temailConn,
      trainingPrograms: trainingPrograms,
      traininFrom: traininFrom,
      traininTo: traininTo,
      numberOfHours: numberOfHours,
      typeOfTraining: typeOfTraining,
      conducted: conducted,
      certificate: certificate,
    });
    res.status(201).json({ message: "Successfully Training!", createTraining });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

//Update Training
export const updateTraining = async (req, res) => {
  const { id } = req.params;
  const {
    //temailConn,
    trainingPrograms,
    traininFrom,
    traininTo,
    numberOfHours,
    typeOfTraining,
    conducted,
    certificate,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateTraining = await Training.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        // temailConn: temailConn,
        trainingPrograms: trainingPrograms,
        traininFrom: traininFrom,
        traininTo: traininTo,
        numberOfHours: numberOfHours,
        typeOfTraining: typeOfTraining,
        conducted: conducted,
        certificate: certificate,
      },
    },
    {}
  );
  res.json(updateTraining);
};

//Delete Training
export const deleteTraining = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Training.findByIdAndRemove(id);

  res.json({ message: "Training deleted successfully." });
};


export default router;
