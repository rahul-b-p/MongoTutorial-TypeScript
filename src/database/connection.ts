import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE || '');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err: any) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
