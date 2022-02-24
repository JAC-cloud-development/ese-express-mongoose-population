import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    quantity: { type: Number },
    type: {
        type: String,
        enum: ["STANDARD", "PREMIUM"]
    }
});

export default mongoose.model('Item', itemSchema);