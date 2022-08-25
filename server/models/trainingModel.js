import mongoose from "mongoose";

const trainingSchema = mongoose.Schema(
  {
    temailConn: { type: String },
    trainingPrograms: { type: String },
    traininFrom: { type: String },
    traininTo: { type: String },
    numberOfHours: { type: String },
    typeOfTraining: { type: String },
    conducted: { type: String },
    certificate: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Training", trainingSchema);
