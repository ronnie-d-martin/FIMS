import mongoose from "mongoose";

const CollegeSchema = mongoose.Schema(
  {
    cemailConn: { type: String },
    cnameOfSchool: { type: String },
    cbasicEducDegreeCourse: { type: String },
    cperiodOfAttendancefrom: { type: String },
    cperiodOfAttendanceto: { type: String },
    chighestLevelUnits: { type: String },
    cyearGraduate: { type: String },
    cscholarshipAcademicHonors: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("College", CollegeSchema);
