import mongoose from "mongoose";

var residentAddress = mongoose.Schema({
  rHouseBlockNo: { type: String },
  rStreet: { type: String },
  rSubdivisionVillage: { type: String },
  rBarangay: { type: String },
  rCityMunicipality: { type: String },
  rProvince: { type: String },
  rZipCode: { type: String },
});

var permanentAddress = mongoose.Schema({
  pHouseBlockNo: { type: String },
  pStreet: { type: String },
  pSubdivisionVillage: { type: String },
  pBarangay: { type: String },
  pCityMunicipality: { type: String },
  pProvince: { type: String },
  pZipCode: { type: String },
});

var elem = mongoose.Schema({
  nameOfSchool: { type: String },
  basicEducDegreeCourse: { type: String },
  periodOfAttendance: {
    type: { from: { type: String }, to: { type: String } },
  },
  highestLevelUnits: { type: String },
  yearGraduate: { type: String },
  scholarshipAcademicHonors: [{ type: String }],
});

var second = mongoose.Schema({
  nameOfSchool: { type: String },
  basicEducDegreeCourse: { type: String },
  periodOfAttendance: {
    type: { from: { type: String }, to: { type: String } },
  },
  highestLevelUnits: { type: String },
  yearGraduate: { type: String },
  scholarshipAcademicHonors: [{ type: String }],
});

var voc = mongoose.Schema({
  nameOfSchool: { type: String },
  basicEducDegreeCourse: { type: String },
  periodOfAttendance: {
    type: { from: { type: String }, to: { type: String } },
  },
  highestLevelUnits: { type: String },
  yearGraduate: { type: String },
  scholarshipAcademicHonors: [{ type: String }],
});

var coll = mongoose.Schema({
  nameOfSchool: { type: String },
  basicEducDegreeCourse: { type: String },
  periodOfAttendance: {
    type: { from: { type: String }, to: { type: String } },
  },
  highestLevelUnits: { type: String },
  yearGraduate: { type: String },
  scholarshipAcademicHonors: [{ type: String }],
});

var educationalBackground = mongoose.Schema({
  elementary: { type: elem },
  secondary: { type: second },
  vocationaTrade: { type: [voc] },
  college: { type: [coll] },
});

var civSerEl = mongoose.Schema({
  careerService: { type: String },
  rating: { type: String },
  dateOfExam: { type: String },
  placeOfExam: { type: String },
  yearGraduate: { type: String },
  license: {
    type: { number: { type: String }, dateOfValidity: { type: String } },
  },
});

var work = mongoose.Schema({
  inclusiveDates: { type: { from: { type: String }, to: { type: String } } },
  position: { type: String },
  department: { type: String },
  monthlySalary: { type: String },
  slp: { type: String },
  statusOfAppointment: { type: String },
  gov: { type: String },
});

var ld = mongoose.Schema({
  title: { type: String },
  type: { type: String },
  dateOfAttendance: {
    type: [{ from: { type: String }, to: { type: String } }],
  },
  numOfHours: { type: String },
  typeOfLD: { type: String },
  conducted: { type: String },
  certificate: { type: String },
});

const userSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    userType: { type: String, required: true },
    picture: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    employeeNumber: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String, default: "N/A" },
    nameExtension: { type: String, default: "N/A" },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    age: { type: String, required: true },
    placeOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    civilStatus: { type: String, required: true },
    height: { type: String, default: "N/A" },
    weight: { type: String, default: "N/A" },
    bloodType: { type: String, default: "N/A" },
    gsisId: { type: String, default: "N/A" },
    pagIbig: { type: String, default: "N/A" },
    philHealthId: { type: String, default: "N/A" },
    sss: { type: String, default: "N/A" },
    tin: { type: String, default: "N/A" },
    citizenship: { type: String, default: "N/A" },
    isBlocked: { type: String, default: "N/A" },

    rHouseBlockNo: { type: String, default: "N/A" },
    rStreet: { type: String, default: "N/A" },
    rSubdivisionVillage: { type: String, default: "N/A" },
    rBarangay: { type: String, default: "N/A" },
    rCityMunicipality: { type: String, default: "N/A" },
    rProvince: { type: String, default: "N/A" },
    rZipCode: { type: String, default: "N/A" },

    pHouseBlockNo: { type: String, default: "N/A" },
    pStreet: { type: String, default: "N/A" },
    pSubdivisionVillage: { type: String, default: "N/A" },
    pBarangay: { type: String, default: "N/A" },
    pCityMunicipality: { type: String, default: "N/A" },
    pProvince: { type: String, default: "N/A" },
    pZipCode: { type: String, default: "N/A" },

    telephone: { type: String, default: "N/A" },
    mobile: { type: String, required: true },
    altEmail: { type: String, default: "N/A" },
    status: { type: String, required: true },

    enameOfSchool: { type: String, default: "N/A" },
    ebasicEducDegreeCourse: { type: String, default: "N/A" },
    efrom: { type: String, default: "N/A" },
    eto: { type: String, default: "N/A" },
    ehighestLevelUnits: { type: String, default: "N/A" },
    eyearGraduate: { type: String, default: "N/A" },
    escholarshipAcademicHonors: { type: String, default: "N/A" },

    snameOfSchool: { type: String, default: "N/A" },
    sbasicEducDegreeCourse: { type: String, default: "N/A" },
    sfrom: { type: String, default: "N/A" },
    sto: { type: String, default: "N/A" },
    shighestLevelUnits: { type: String, default: "N/A" },
    syearGraduate: { type: String, default: "N/A" },
    sscholarshipAcademicHonors: { type: String, default: "N/A" },

    vnameOfSchool: { type: String, default: "N/A" },
    vbasicEducDegreeCourse: { type: String, default: "N/A" },
    vfrom: { type: String, default: "N/A" },
    vto: { type: String, default: "N/A" },
    vhighestLevelUnits: { type: String, default: "N/A" },
    vyearGraduate: { type: String, default: "N/A" },
    vscholarshipAcademicHonors: { type: String, default: "N/A" },

    cnameOfSchool: { type: String, default: "N/A" },
    cbasicEducDegreeCourse: { type: String, default: "N/A" },
    cfrom: { type: String, default: "N/A" },
    cto: { type: String, default: "N/A" },
    chighestLevelUnits: { type: String, default: "N/A" },
    cyearGraduate: { type: String, default: "N/A" },
    cscholarshipAcademicHonors: { type: String, default: "N/A" },

    CScareerService: { type: String, default: "N/A" },
    CSrating: { type: String, default: "N/A" },
    CSdateOfExam: { type: String, default: "N/A" },
    CSplaceOfExam: { type: String, default: "N/A" },
    CSlicenseNo: { type: String, default: "N/A" },
    CSlicenseDate: { type: String, default: "N/A" },
    CSlicense: { type: String, default: "N/A" },

    WEfrom: { type: String, default: "N/A" },
    WEto: { type: String, default: "N/A" },
    WEposition: { type: String, default: "N/A" },
    WEdepartment: { type: String, default: "N/A" },
    WEmonthlySalary: { type: String, default: "N/A" },
    WEslp: { type: String, default: "N/A" },
    WEstatusOfAppointment: { type: String, default: "N/A" },
    WEgov: { type: String, default: "N/A" },

    LLtitle: { type: String, default: "N/A" },
    LLtype: { type: String, default: "N/A" },
    LLfrom: { type: String, default: "N/A" },
    LLto: { type: String, default: "N/A" },
    LLnumOfHours: { type: String, default: "N/A" },
    LLtypeOfLD: { type: String, default: "N/A" },
    LLconducted: { type: String, default: "N/A" },
    LLcertificate: { type: String, default: "N/A" },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
