import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
    id: { type: String, default: 'N/A' },
    vision: { type: String, default: 'N/A'},
    mission: { type: String, default: 'N/A'},
    goals: { type: String, default: 'N/A'},
    logo:{type: String, default: 'N/A'},
    


    createdAt: {
        type: Date,
        default: new Date()
    }

}, {
    timestamps: true
});

export default mongoose.model("About", aboutSchema);