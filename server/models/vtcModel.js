import mongoose from "mongoose";

const VocationalSchema = mongoose.Schema(
  {
    vemailConn: { type: String },
    vnameOfSchool: { type: String },
    vbasicEducDegreeCourse: { type: String },
    vperiodOfAttendancefrom: { type: String },
    vperiodOfAttendanceto: { type: String },
    vhighestLevelUnits: { type: String },
    vyearGraduate: { type: String },
    vscholarshipAcademicHonors: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Vocational", VocationalSchema);
