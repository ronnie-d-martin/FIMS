import mongoose from "mongoose";

const workExpSchema = mongoose.Schema(
  {
    wemailConn: { type: String },
    inclusiveFrom: { type: String },
    inclusiveTo: { type: String },
    posistionTitle: { type: String },
    department: { type: String },
    monthlySalary: { type: String },
    salary: { type: String },
    statusOfAppointment: { type: String },
    govService: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("WorkExperience", workExpSchema);
