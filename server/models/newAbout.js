import mongoose from "mongoose";

const newaboutSchema = mongoose.Schema({
    title: [{ type: String, default: 'N/A' }],
    description: [{ type: String, default: 'N/A'}]

}, {
    timestamps: true
});

export default mongoose.model("newabout", newaboutSchema);