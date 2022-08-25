import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import UserModal from "../models/user.js";
import AboutModal from "../models/about.js";
const router = express.Router();

export const getAbout = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await AboutModal.find(id);

    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);
    const data = await UserModal.findById(id);

    res.status(200).json({ user: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getByEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const data = await UserModal.findOne({ email });

    res.status(200).json({ user: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePersonal = async (req, res) => {
  const { id } = req.params;
  const {
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

  const updatedPost = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: {
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

export const updateEduc = async (req, res) => {
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

export const updateCivil = async (req, res) => {
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

export const updateWe = async (req, res) => {
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

export const updateLL = async (req, res) => {
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

export const updateEmail = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // if(rand !== code) return res.status(400).json({message: "Code doesn't match."});

  const updatedEmail = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: { email: email },
    },
    {}
  );

  res.json(updatedEmail);
};

export const updateImage = async (req, res) => {
  const { id } = req.params;
  const { picture } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // if(rand !== code) return res.status(400).json({message: "Code doesn't match."});

  const updatePic = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: { picture: picture },
    },
    {}
  );

  res.json(updatePic);
};

export const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { password, currentPassword, confirmPassword, email } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const existingUser = await UserModal.findOne({ email });

  const isPasswordCorrect = await bcrypt.compare(
    currentPassword,
    existingUser.password
  );

  if (!isPasswordCorrect)
    return res.status(400).json({ message: "Incorrect current password!" });

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Password doesn't match." });

  const Newpassword = await bcrypt.hash(password, 12);

  const updatedPassword = await UserModal.updateOne(
    {
      _id: id,
    },
    {
      $set: { password: Newpassword },
    },
    {}
  );

  res.json(updatedPassword);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await UserModal.findByIdAndRemove(id);

  res.json({ message: "Account deleted successfully." });
};

export const addVoc = async (req, res) => {
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

export default router;
