import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    id: { type: String },
    userType: { type: String, required: true},
    firstName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},



    createdAt: {
        type: Date,
        default: new Date()
    }

}, {
    timestamps: true
});

export default mongoose.model("Admin", adminSchema);