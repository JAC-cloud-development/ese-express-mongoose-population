import mongoose from 'mongoose';

export default async function init() {
    try {
        console.log("Connecting to mongoose...")
        await mongoose.connect('mongodb://localhost:27888/express-test');
        console.log("Mongose connected.")
    } catch (e) {
        console.error(e)
    }
}