import express from "express";
import mongoose from "mongoose";

import bcrypt from "bcryptjs";
import UserModal from "../models/user.js";
import AboutModal from "../models/about.js";
const router = express.Router();

import jwt from "jsonwebtoken";
const facultySec = "faculty";

export const updateAbout = async (req, res) => {
  const { id } = req.params;
  const { vision, mission, goals, logo } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await AboutModal.updateOne(
      {
        _id: id,
      },
      {
        $set: { vision: vision, mission: mission, goals: goals, logo: logo },
      },
      {}
    );

    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFacultyData = async (req, res) => {
  try {
    const users = await UserModal.find();

    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateVerify = async (req, res) => {
  const { id } = req.params;
  const status = "verified";
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await UserModal.updateOne(
      {
        _id: id,
      },
      {
        $set: { status: status },
      },
      {}
    );
    //const updatedPost = { firstName, _id: id };

    //await UserModal.updateOne(id, updatedPost, { new: true });

    // const updatedPost = { firstName, _id: id};

    // UserModal.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updatePersonalAdmin = async (req, res) => {
  const { id } = req.params;
  const {
    email,
    password,
    picture,
    firstName,
    middleName,
    lastName,
    nameExtension,
    dateOfBirth,
    age,
    placeOfBirth,
    gender,
    civilStatus,
    citizenship,
    bloodType,
    height,
    weight,
    mobile,
    telephone,
    altEmail,
    rHouseBlockNo,
    rStreet,
    rSubdivisionVillage,
    rBarangay,
    rCityMunicipality,
    rProvince,
    rZipCode,
    pHouseBlockNo,
    pStreet,
    pSubdivisionVillage,
    pBarangay,
    pCityMunicipality,
    pProvince,
    pZipCode,
    gsisId,
    pagIbig,
    philHealthId,
    sss,
    tin,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const hashedPassword = await bcrypt.hash(password, 12);
  const updatedPost = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        email: email,
        password: hashedPassword,
        picture: picture,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        nameExtension: nameExtension,
        dateOfBirth: dateOfBirth,
        age: age,
        placeOfBirth: placeOfBirth,
        gender: gender,
        civilStatus: civilStatus,
        citizenship: citizenship,
        bloodType: bloodType,
        height: height,
        weight: weight,
        mobile: mobile,
        telephone: telephone,
        altEmail: altEmail,
        gsisId: gsisId,
        pagIbig: pagIbig,
        philHealthId: philHealthId,
        sss: sss,
        tin: tin,
        rHouseBlockNo: rHouseBlockNo,
        rStreet: rStreet,
        rSubdivisionVillage: rSubdivisionVillage,
        rBarangay: rBarangay,
        rCityMunicipality: rCityMunicipality,
        rProvince: rProvince,
        rZipCode: rZipCode,
        pHouseBlockNo: pHouseBlockNo,
        pStreet: pStreet,
        pSubdivisionVillage: pSubdivisionVillage,
        pBarangay: pBarangay,
        pCityMunicipality: pCityMunicipality,
        pProvince: pProvince,
        pZipCode: pZipCode,
      },
    },
    {}
  );
  //const updatedPost = { firstName, _id: id };

  //await UserModal.updateOne(id, updatedPost, { new: true });

  // const updatedPost = { firstName, _id: id};

  // UserModal.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const updateEducAdmin = async (req, res) => {
  const { id } = req.params;
  const {
    enameOfSchool,
    efrom,
    eto,
    ebasicEducDegreeCourse,
    ehighestLevelUnits,
    eyearGraduate,
    escholarshipAcademicHonors,
    snameOfSchool,
    sfrom,
    sto,
    sbasicEducDegreeCourse,
    shighestLevelUnits,
    syearGraduate,
    sscholarshipAcademicHonors,
    vnameOfSchool,
    vfrom,
    vto,
    vbasicEducDegreeCourse,
    vhighestLevelUnits,
    vyearGraduate,
    vscholarshipAcademicHonors,
    cnameOfSchool,
    cfrom,
    cto,
    cbasicEducDegreeCourse,
    chighestLevelUnits,
    cyearGraduate,
    cscholarshipAcademicHonors,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const eduUpdate = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        enameOfSchool: enameOfSchool,
        efrom: efrom,
        eto: eto,
        ebasicEducDegreeCourse: ebasicEducDegreeCourse,
        ehighestLevelUnits: ehighestLevelUnits,
        eyearGraduate: eyearGraduate,
        escholarshipAcademicHonors: escholarshipAcademicHonors,
        snameOfSchool: snameOfSchool,
        sfrom: sfrom,
        sto: sto,
        sbasicEducDegreeCourse: sbasicEducDegreeCourse,
        shighestLevelUnits: shighestLevelUnits,
        syearGraduate: syearGraduate,
        sscholarshipAcademicHonors: sscholarshipAcademicHonors,
        vnameOfSchool: vnameOfSchool,
        vfrom: vfrom,
        vto: vto,
        vbasicEducDegreeCourse: vbasicEducDegreeCourse,
        vhighestLevelUnits: vhighestLevelUnits,
        vyearGraduate: vyearGraduate,
        vscholarshipAcademicHonors: vscholarshipAcademicHonors,
        cnameOfSchool: cnameOfSchool,
        cfrom: cfrom,
        cto: cto,
        cbasicEducDegreeCourse: cbasicEducDegreeCourse,
        chighestLevelUnits: chighestLevelUnits,
        cyearGraduate: cyearGraduate,
        cscholarshipAcademicHonors: cscholarshipAcademicHonors,
      },
    },
    {}
  );

  res.json(eduUpdate);
};

export const updateLL = async (req, res) => {
  const { id } = req.params;
  const {
    LLtitle,
    LLtype,
    LLfrom,
    LLto,
    LLnumOfHours,
    LLtypeOfLD,
    LLconducted,
    LLcertificate,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const eduUpdate = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        LLtitle: LLtitle,
        LLtype: LLtype,
        LLfrom: LLfrom,
        LLto: LLto,
        LLnumOfHours: LLnumOfHours,
        LLtypeOfLD: LLtypeOfLD,
        LLconducted: LLconducted,
        LLcertificate: LLcertificate,
      },
    },
    {}
  );

  res.json(eduUpdate);
};

export const updateCivilAdmin = async (req, res) => {
  const { id } = req.params;
  const {
    CScareerService,
    CSrating,
    CSdateOfExam,
    CSplaceOfExam,
    CSlicenseNo,
    CSlicenseDate,
    CSlicense,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const eduUpdate = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        CScareerService: CScareerService,
        CSrating: CSrating,
        CSdateOfExam: CSdateOfExam,
        CSplaceOfExam: CSplaceOfExam,
        CSlicenseNo: CSlicenseNo,
        CSlicenseDate: CSlicenseDate,
        CSlicense: CSlicense,
      },
    },
    {}
  );

  res.json(eduUpdate);
};

export const updateWeAdmin = async (req, res) => {
  const { id } = req.params;
  const {
    WEfrom,
    WEto,
    WEposition,
    WEdepartment,
    WEmonthlySalary,
    WEslp,
    WEstatusOfAppointment,
    WEgov,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const eduUpdate = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        WEfrom: WEfrom,
        WEto: WEto,
        WEposition: WEposition,
        WEdepartment: WEdepartment,
        WEmonthlySalary: WEmonthlySalary,
        WEslp: WEslp,
        WEstatusOfAppointment: WEstatusOfAppointment,
        WEgov: WEgov,
      },
    },
    {}
  );

  res.json(eduUpdate);
};

export const updateLLAdmin = async (req, res) => {
  const { id } = req.params;
  const {
    LLtitle,
    LLtype,
    LLfrom,
    LLto,
    LLnumOfHours,
    LLtypeOfLD,
    LLconducted,
    LLcertificate,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const eduUpdate = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        LLtitle: LLtitle,
        LLtype: LLtype,
        LLfrom: LLfrom,
        LLto: LLto,
        LLnumOfHours: LLnumOfHours,
        LLtypeOfLD: LLtypeOfLD,
        LLconducted: LLconducted,
        LLcertificate: LLcertificate,
      },
    },
    {}
  );

  res.json(eduUpdate);
};

export const addVocAdmin = async (req, res) => {
  const { id } = req.params;
  const {
    vnameOfSchool,
    vfrom,
    vto,
    vbasicEducDegreeCourse,
    vhighestLevelUnits,
    vyearGraduate,
    vscholarshipAcademicHonors,
    cnameOfSchool,
    cfrom,
    cto,
    cbasicEducDegreeCourse,
    chighestLevelUnits,
    cyearGraduate,
    cscholarshipAcademicHonors,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // if(rand !== code) return res.status(400).json({message: "Code doesn't match."});

  const addDataVoc = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        vocationaTrade: {
          vnameOfSchool: vnameOfSchool,
          vbasicEducDegreeCourse: vbasicEducDegreeCourse,
          vfrom: vfrom,
          vto: vto,
          vhighestLevelUnits: vhighestLevelUnits,
          vyearGraduate: vyearGraduate,
          vscholarshipAcademicHonors: vscholarshipAcademicHonors,
          cnameOfSchool: cnameOfSchool,
          cfrom: cfrom,
          cto: cto,
          cbasicEducDegreeCourse: cbasicEducDegreeCourse,
          chighestLevelUnits: chighestLevelUnits,
          cyearGraduate: cyearGraduate,
          cscholarshipAcademicHonors: cscholarshipAcademicHonors,
        },
      },
    },
    {}
  );

  res.json(addDataVoc);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await UserModal.findByIdAndRemove(id);

  res.json({ message: "Account deleted successfully." });
};

export const AddUser = async (req, res) => {
  const {
    userType,
    email,
    password,
    employeeNumber,
    firstName,
    lastName,
    dateOfBirth,
    age,
    placeOfBirth,
    gender,
    civilStatus,
    picture,
    mobile,
    status,
  } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      userType,
      email,
      password: hashedPassword,
      employeeNumber,
      firstName,
      lastName,
      dateOfBirth,
      age,
      placeOfBirth,
      gender,
      civilStatus,
      picture,
      mobile,
      status
    });

    const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        facultySec,
        { expiresIn: "8h" }
      );

    res
      .status(201)
      .json({ message: "Account successfully Added!", result });
  } catch (error) {
      //res.status(500).json({ message: "Something went wrong." });
  }
};

export default router;
