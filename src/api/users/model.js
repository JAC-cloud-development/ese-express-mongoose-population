import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String }
});

export default mongoose.model('User', itemSchema);